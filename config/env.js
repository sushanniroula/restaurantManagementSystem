require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    DB_URI: process.env.DB || 'mongodb://localhost:27017/restaurantManagement'
}