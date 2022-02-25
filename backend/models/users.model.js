const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    gkaToken: { type: String, required: true },
    properties: [{ type: Schema.Types.ObjectId, ref: 'properties' }],
    communities: [{ type: Schema.Types.ObjectId, ref: 'communities' }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('users', userSchema);