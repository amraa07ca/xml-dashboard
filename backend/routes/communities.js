const router = require('express').Router();
const User = require('../models/users.model');
const Community = require('../models/community.model');

// Load input validation
const validateCommunityInput = require("../validation/community");

// ***** Base Route URL /communities *****

// Get all communities
router.route('/').get(async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

// Get user's communities
router.route('/:userID').get(async (req, res) => {
    try {
        const communities = await Community.find({userID: req.params.userID});
        res.json(communities);
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
})

// Add Community
router.route('/:userID/add').post(async (req, res) => {
    const { errors, isValid } = validateCommunityInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    try {
        const io = req.app.get('io');
        const newCommunity = new Community({
            communityName: req.body.communityName,
            address: {
                streetAddress1: req.body.streetAddress1,
                streetAddress2: req.body.streetAddress2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            },
            salesAgent: {
                email: req.body.email,
                phoneNumber: req.body.phoneNumber
            }
        });

        const user = await User.findById(req.params.userID);
        // Save new community with user ref
        newCommunity.userID = user;
        await newCommunity.save();
        // Save new community ref to user
        // user.communities.push(newCommunity);
        // await user.save();

        res.json('Community added');
        io.emit('dbModified');

    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

// Delete Community
router.route('/:id').delete(async (req, res) => {
    try {
        const io = req.app.get('io');
        await Community.findByIdAndDelete(req.params.id);

        res.json('Community deleted!');
        io.emit('dbModified');
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

// Update Community
router.route('/update/:id').put(async (req, res) => {
    try {
        const io = req.app.get('io');
        const community = await Community.findById(req.params.id);

        await community.update(req.body);
        
        res.json('Community updated!')
        io.emit('dbModified');
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
