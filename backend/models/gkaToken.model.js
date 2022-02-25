const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GkaTokenSchema = new Schema({
    gkaToken: { type: String, required: true },
    companyName: { type: String, required: true }
}, {
    timestamps: true,
});

const GkaToken = mongoose.model('gkatokens', GkaTokenSchema);

module.exports = GkaToken;