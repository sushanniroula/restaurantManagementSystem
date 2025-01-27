const mongoose = require('mongoose')
const { DB_URI } = require('./env')
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('Database Connected');
    } catch (error) {
        console.error('Database connection failed: ', error.message);
        process.exit(1)
    }
}

module.exports = connectDB