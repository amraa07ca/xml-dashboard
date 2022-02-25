const router = require('express').Router();
const User = require('../models/users.model');
const Property = require('../models/property.model');

// Get all properties
router.route('/').get((req, res) => {
    Property.find()
        .then(properties => res.json(properties))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get user's properties
router.route('/:userID').get(async (req, res) => {
    try {
        const properties = await Property.find({ user: req.params.userID });
        res.json(properties);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add Property
router.route('/:userID/add').post(async (req, res) => {
    try {
        const io = req.app.get('io');
        const newProperty = new Property(req.body);
        const user = await User.findById(req.params.userID);
        // Save new property with user ref
        newProperty.user = user;
        await newProperty.save();
        // Save new property ref to user
        // user.properties.push(newProperty);
        // await user.save();

        res.json('Property added!');
        io.emit('dbModified');

    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Get property
router.route('/:id').get((req, res) => {
    Property.findById(req.params.id)
        .then(property => res.json(property))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete property
router.route('/:id').delete(async (req, res) => {
    try {
        const io = req.app.get('io');
        
        await Property.findByIdAndDelete(req.params.id);
        
        res.json('Property deleted!');
        io.emit('dbModified');

    } catch (err) {
        res.status(400).json('Error: ' + err);
    }

});

// Update property
router.route('/update/:id').put((req, res) => {
    const io = req.app.get('io');
    Property.findById(req.params.id)
        .then(property => {
            property.name = req.body.name
            property.save()
                .then(() => {
                    res.json('Property updated!');
                    io.emit('dbModified');
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;