// NOTE: This is too much pero basically we're just connecting our DB to our application. 

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // Ang process na variable kay gikan ni sa NodeJS
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB