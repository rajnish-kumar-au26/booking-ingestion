const joi = require("joi");

const bookingSchema = joi.object({
  bookingID: joi.string().required(),
  customerName: joi.string().required(),
  bookingDate: joi.string().required(),
  amount: joi.number().positive().required(),
  venderDetails: joi.object().required(),
});

const validationBooking = (data) => bookingSchema.validate(data);

module.exports = { validationBooking };
