const mongoose = require("mongoose");
const { Availability } = require("./Availability");
const { User } = require("./User");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  profilePicture: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  petSitter: {
    type: Boolean,
  },
  rate: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  availability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Availability",
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
