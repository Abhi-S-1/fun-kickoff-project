const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createProfile, updateProfile } = require("../controllers/profile");

router.route("/").post(createProfile);
router.route("/update").post(updateProfile);

module.exports = router;
