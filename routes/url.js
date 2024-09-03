const express = require("express");
const router = express.Router();
const { generateShortUrl, handlevisitHistory } = require("../controllers/url");

router.post("/", generateShortUrl);
router.get("/:shortId", handlevisitHistory)

module.exports = router