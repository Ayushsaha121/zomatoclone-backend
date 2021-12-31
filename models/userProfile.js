const mongoose = require("mongoose");
const userProfile = new mongoose.model("userprofile", new mongoose.Schema({
    name: { 
        type: String,
     },
    mobileNumber: {
        type: Number,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    createdAt: {
        type: String,
    },
    updatedAt: {
        type: String,
    }
}));
module.exports = userProfile;