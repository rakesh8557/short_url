const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/short_urls"

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDb")   
    } catch (error) {
        console.error('Error while dbConn', error)
    }
}

module.exports  = { connectToMongo };