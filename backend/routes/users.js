const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load Model
const User = require('../models/users.model');
const GkaToken = require('../models/gkaToken.model');

// GET users/
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})


// POST /users/register - Register user
router.post("/register", (req, res) => {

    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    email: "Email already exists!"
                });
            } else {
                GkaToken.findOne({ gkaToken: req.body.gkaToken })
                    .then(gkatoken => {
                        if (gkatoken) {
                            const newUser = new User({
                                email: req.body.email,
                                password: req.body.password,
                                companyName: req.body.companyName,
                                gkaToken: req.body.gkaToken
                            });
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err;
                                    newUser.password = hash;
                                    newUser.save()
                                        .then(user => res.json(user))
                                        .catch(err => console.log(err));
                                })
                            })
                        } else {
                            return res.status(400).json({
                                gkaToken: "Invalid Gka Token!"
                            });
                        }
                    })
            }
        });
});

// POST users/login - Login user and return JWT token
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            userID: user.id,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Email or Password is wrong!" });
            }
        });
    });
});

module.exports = router;