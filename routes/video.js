const express = require("express");
const router = express.Router();
const { videoYoutube, videoView } = require("../controllers/video");

router.post("/", videoYoutube);
router.get("/", videoView);

module.exports = router;