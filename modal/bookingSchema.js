const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingID: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  venderDetails: {
    type: Object,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
