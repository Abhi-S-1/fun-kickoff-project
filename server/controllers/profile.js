const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.getProfile = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.find({ email: email });
  const user_id = user[0]._id;

  const profile = await Profile.find({
    user: user_id,
  });

  res.status(200).json({ test: profile });
});

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
    availabilityId,
  } = req.body;

  const user = await User.find({ email: email });

  if (!user) {
    res.status(400).json({ Error: "Invalid user" });
  }

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
    availability: availabilityId,
  }).save();

  res.status(200).json({ test: profile });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
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
    availabilityId,
  } = req.body;

  const user = await User.find({ email: email });
  const user_id = user[0]._id;

  const updated = await Profile.update(
    { user: user_id },
    {
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
      availability: availabilityId,
    }
  );

  res.status(200).json({ test: updated });
});
