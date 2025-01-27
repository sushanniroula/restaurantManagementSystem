const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    items: [
      {
        menuId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    table: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in-process", "complete"],
      default: "pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderType: {
      type: String,
      enum: ["dine-in", "takeout", "delivery"],
      required: true,
    },
    customerDetails: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Order', OrderSchema)