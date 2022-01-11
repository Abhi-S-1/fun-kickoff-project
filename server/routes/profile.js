const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getProfile,
  getAllProfiles,
  createProfile,
  updateProfile,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);
router.route("/update").put(protect, updateProfile);
router.route("/user").get(protect, getProfile);
router.route("/all").get(getAllProfiles);

module.exports = router;
