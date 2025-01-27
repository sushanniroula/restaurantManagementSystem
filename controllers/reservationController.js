const Reservation = require("../models/reservationModel");

exports.getReversations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createReservation = async (req, res) => {
  const { name, phone, date, time, tableNumber } = req.body;

  try {
    const reservation = await Reservation.create({
      name,
      phone,
      date,
      time,
      tableNumber,
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
};
