const Profile = require("../models/Profile");
const User = require("../models/User");
const Availability = require("../models/Availability");
const asyncHandler = require("express-async-handler");

exports.createProfile = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    profilePicture,
    phoneNumber,
    address,
    description,
    petSitter,
    rate,
    email,
  } = req.body;

  const user = await User.find({ email: email });

  if (!user) {
    res.status(400).json({ Error: "Invald user" });
  }

  const availability = await new Availability({
    monday: "10am to 10pm",
    tuesday: "10am to 10pm",
    wednesday: "10am to 10pm",
    thursday: "10am to 10pm",
    friday: "10am to 10pm",
    saturday: "10am to 10pm",
    sunday: "10am to 10pm",
  }).save();

  const user_id = user[0]._id;
  const profile = await new Profile({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    profilePicture: profilePicture,
    phoneNumber: phoneNumber,
    address: address,
    description: description,
    petSitter: petSitter,
    rate: rate,
    email: email,
    user: user_id,
    availability: availability._id,
  }).save();

  res.status(200).json({ test: profile });
});
