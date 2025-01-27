const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    table: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    reservationTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['confirmed', 'canceled'],
        default: 'confirmed'
    }
})


module.exports = mongoose.model('Reservation', ReservationSchema)