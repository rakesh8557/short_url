const User = require('../models/users')
const {setUser} = require("../models/authMap");

const handleUSerSignup = async (req, res) => {
    const {name, email_Id, password,role} = req.body
    await User.create({
        name, email_Id, password,role
    })

    return res.redirect("/");
}


const handleUSerlogin = async (req, res) => {
    const {email_Id, password} = req.body;
    const user = await User.findOne({email_Id, password})
    if(!user) return res.render('login', {error : "invalid user"});

    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");
}

module.exports = { handleUSerSignup , handleUSerlogin }