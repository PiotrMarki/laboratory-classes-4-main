const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const productsSlice = require("../store/products");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: productsSlice.products,
  });
});

router.get("/add", (_request, response) => {
  response.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
});

router.post("/add", (request, response) => {
  productsSlice.newestProduct = request.body;
  productsSlice.products.push(request.body);
  response.status(STATUS_CODE.FOUND).redirect("/products/new");
});

router.get("/new", (_request, response) => {
  response.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct: productsSlice.newestProduct,
  });
});

module.exports = router;
