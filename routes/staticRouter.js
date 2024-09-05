const express = require("express");
const url = require("../models/url");
const { restrictTo } = require("../middleware/auth");
const router = express.Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async(req, res) => {
    const allurls = await url.find({});
    return res.render("home", {urls : allurls});
})


router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    const allurls = await url.find({createdBy : req.user._id});
    return res.render("home", {urls : allurls});
})

router.get("/signup", (req, res) => {
    return res.render("signUp");
})

router.get("/user/login", (req, res) => {
    return res.render("login");
})

module.exports = router