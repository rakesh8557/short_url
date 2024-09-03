const express = require("express");
const router = express.Router();
const {handleUSerSignup, handleUSerlogin} = require("../controllers/user")

router.post("/", handleUSerSignup);
router.post("/login", handleUSerlogin);

module.exports = router;