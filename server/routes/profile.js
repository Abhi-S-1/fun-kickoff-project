const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profile");

router.route("/").post(createProfile);
router.route("/update").post(updateProfile);
router.route("/user").get(getProfile);

module.exports = router;
