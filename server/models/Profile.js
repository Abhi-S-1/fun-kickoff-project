const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
  },
  profile_picture: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  pet_sitter: {
    type: Boolean,
  },
  rate: {
    type: Number,
    required: true,
  },
  availability: {
    type: Object,
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
