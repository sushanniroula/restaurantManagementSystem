const Inventory = require('../models/inventoryModel')

exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find()
        res.status(200).josn(inventory)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message})
    }
}

exports.addInventory = async (req, res) => {
    const { name, quantity, unit, restockThreshold } = req.body
    try {
        const item = await Inventory.create({ name, quantity, unit, restockThreshold })
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}