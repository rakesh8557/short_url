const shortid = require('shortid'); 
const URL = require("../models/url")

const generateShortUrl = async (req, res) => {
    const body = req.body;
    if(!body.url)
        return res.status(400).json({error: "url is required"})
    const shortID = await shortid();

    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : [],
        createdBy : req.user._id
    })

    return res.render("home", ({
        id : shortID
    }))
}

const handlevisitHistory = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push : {
            visitHistory : [
                {
                    timestamp : Date.now(),
                },
            ]
        }
    });
    if (entry && entry.redirectURL) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send('Redirect URL not found');
    }
}

module.exports = {generateShortUrl , handlevisitHistory}