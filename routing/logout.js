const express = require("express");

const { LOGOUT_LINKS } = require("../constants/navigation");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
});

module.exports = router;
