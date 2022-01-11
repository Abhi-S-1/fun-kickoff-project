const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  weekOf: {
    type: Date,
    default: Date.now,
  },
  monday: {
    type: String,
  },
  tuesday: {
    type: String,
  },
  wednesday: {
    type: String,
  },
  thursday: {
    type: String,
  },
  friday: {
    type: String,
  },
  saturday: {
    type: String,
  },
  sunday: {
    type: String,
  },
});

module.exports = Availability = mongoose.model(
  "availability",
  availabilitySchema
);
