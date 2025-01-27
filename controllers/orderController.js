const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  const { items, table, totalPrice, orderType, customerDetails } = req.body;

  try {
    const newOrder = new Order({
      items,
      table,
      totalPrice,
      orderType,
      customerDetails,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.menuItemId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
