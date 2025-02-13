const dayjs = require("dayjs");
const Booking = require("../modal/bookingSchema");
const { validationBooking } = require("../validations/bookingValidator");

class bookingController {
  createBooking = async (req, res) => {
    try {
      const { error } = validationBooking(req.body);
      if (error) {
        throw new Error("Please send correct data");
      }

      const formattedBokking = {
        ...req.body,
        bookingDate: dayjs(req.body.bookingDate).format("YYYY-MM-DD"),
      };
      const newBooking = new Booking(formattedBokking);
      const booking = await newBooking.save();

      res
        .status(201)
        .json({ message: "Booking saved successfully", data: booking });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllBookings = async (req, res) => {
    try {
      const { date, venderName } = req.query;
      let fillter = {};
      if (date) {
        fillter.bookingDate = date;
      }
      if (venderName) {
        fillter["venderDetails.name"] = { $regex: new RegExp(venderName, "i") };
      }
      const bookings = await Booking.find(fillter);

      if (!bookings) {
        throw new Error("No Bookings Founds");
      }
      res.status(200).json({ message: "Founds all bookings", data: bookings });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getBooking = async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (!booking) {
        throw new Error("Booking not found");
      }
      res
        .status(200)
        .json({ message: "Booking found succesfully", data: booking });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteBooking = async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) {
        throw new Error("Booking not found");
      }
      res
        .status(200)
        .json({ message: "Booking deleted succesfully", data: booking });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = new bookingController();
