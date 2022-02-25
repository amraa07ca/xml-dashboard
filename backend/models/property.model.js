const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
}, {
    timestamps: true,
});

module.exports = mongoose.model('properties', propertySchema);