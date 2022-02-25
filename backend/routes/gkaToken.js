const router = require('express').Router();
const GkaToken = require('../models/gkaToken.model');

// POST /gkatoken/add - Add Token
router.post("/add", (req, res) => {
    const newGkaToken = new GkaToken({
        gkaToken: req.body.gkaToken,
        companyName: req.body.companyName
    });

    newGkaToken.save()
        .then(() => {
            res.json('Gka Token added!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;