const express = require("express");
const router = express.Router();
const { audioYoutube, audioView } = require("../controllers/audio");

router.post("/", audioYoutube);
router.get("/", audioView);

module.exports = router;