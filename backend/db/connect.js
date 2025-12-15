// import mongodb from 'mongodb'
import mongoose from "mongoose"
import "dotenv/config"

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("rohit");
        
    }
    catch (error) {
        console.log("error connecting to database:", error)
    }
}

export default connectToDB
