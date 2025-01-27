const { string } = require('joi')
const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Menu', MenuSchema)