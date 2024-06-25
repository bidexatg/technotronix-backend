const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Mongodb...");
    } catch (error) {
       console.log("Could not establish a connection", error); 
    }
}

module.exports = connectDB;