const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

//importing routes
const authRoutes = require('./routes/authRoutes')
const menuRoutes = require('./routes/menuRoutes')
const orderRoutes = require('./routes/orderRoutes')
const reservationRoutes = require('./routes/reservationRoutes')
const inventoryRoutes = require('./routes/inventoryRoutes')

const app = express()

//middleware
app.use(cors())
app.use(bodyParser.json())

//connect to DB
connectDB()

//routes
app.use('/api/auth', authRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/reservation', reservationRoutes)
app.use('/api/inventory', inventoryRoutes)


module.exports = app
