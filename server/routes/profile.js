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
router.route("/update").post(protect, updateProfile);
router.route("/user").get(getProfile);
router.route("/all").get(getAllProfiles);

module.exports = router;
