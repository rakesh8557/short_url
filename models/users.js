const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email_Id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role : {
        type:String,
        required : true,
        default : 'NORMAL'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);