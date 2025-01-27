const Menu = require('../models/menuModel')

exports.getMenuItems = async (req, res) => {
    try {
        const menu = await Menu.find()
        res.json(menu)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.addMenuItem = async (req, res) => {
    const { name, category, price, availability } = req.body
    try {
        const menuItem = new Menu({name, category, price, availability})
        await menuItem.save()
        res.status(201).json(menuItem)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

exports.updateMenuItem = async (req, res) => {
    try {
        const menuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!menuItem) return res.status(404).json({error: 'Menu item not found'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await Menu.findByIdAndDelete(req.params.id)
        if(!menuItem) return res.status(404).json({error: 'Menu item not found'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}