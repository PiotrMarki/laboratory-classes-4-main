const express = require("express");
const logoutController = require("../controllers/logoutController.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Aplikacja zostanie zamknięta...");
  logoutController.killApplication();
});

module.exports = router;