const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.user.id;

  const profile = await Profile.findById({ user: id });

  if (!profile) {
    res.status(404);
    throw new Error("Invalid request");
  }
  res.status(200).json({ profile: profile });
});

exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({}, { user: 0 });

  res.status(200).json({ profiles: profiles });
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
    availabilityId,
  } = req.body;

  const id = req.user.id;
  const user = await User.findById({ _id: id });

  if (!user) {
    res.status(400).json({ Error: "Invalid user" });
  }

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
    user: id,
    availability: availabilityId,
  }).save();

  res.status(200).json({ profile: profile });
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
    availabilityId,
  } = req.body;

  id = req.user.id;
  const user = await User.findById({ _id: id });

  if (!user) {
    res.status(400).json({ Error: "Invalid user" });
  }

  const updated = await Profile.update(
    { user: id },
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
      user: user_id,
      availability: availabilityId,
    }
  );

  const profile = await Profile.findById({ user: id });
  res.status(200).json({ newProfile: profile });
});
