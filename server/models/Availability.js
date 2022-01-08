const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  week_of: {
    type: Date,
    required: true,
  },
  monday: {
    type: String,
  },
  tuesday: {
    type: String,
  },
  wednseday: {
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
