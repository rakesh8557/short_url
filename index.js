const express = require("express"); 
const {connectToMongo} = require("./dbconn")
const urlRoute = require('./routes/url')
const URL = require("./models/url")
const path = require("path");
const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/auth');
const cookieParser = require('cookie-parser');
const {checkUserAuthentication, restrictTo} = require("./middleware/auth")


// Connection to Db
connectToMongo();


const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }))
app.use(cookieParser());
app.use(checkUserAuthentication);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", restrictTo(["NORMAL"]), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.get("/test", async (req, res) => {
    const allurls = await URL.find({});
    return res.render("home", {
        urls : allurls
    });
})

app.listen(port, () => console.log(`server started at port ${port}`));