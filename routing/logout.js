const express = require("express");

const logoutController = require('../controllers/logoutControlle.js');

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: logoutController.js,
  });
});

module.exports = router;
