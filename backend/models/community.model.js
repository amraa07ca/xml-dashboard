const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'users' },
    communityName: { type: String, required: true },
    address: {
        streetAddress1: { type: String, required: true },
        streetAddress2: { type: String, required: false },
        city: { type: String, required: true },
        state: { type: String, required: false },
        zip: { type: Number, required: true },
        latitude: {type: Number, required: true },
        longitude: {type: Number, required: true }
    },
    salesAgent: {
        email: {type: String, required: true },
        phoneNumber: {type: String, required: true }
    },
    gallery: [{
        originalname: { type: String, required: false },
        location: { type: String, required: false },
        size: { type: String, required: false },
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('communities', communitySchema);