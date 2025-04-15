const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
});

module.exports = router;
