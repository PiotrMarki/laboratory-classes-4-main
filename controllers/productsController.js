const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const productsSlice = require("../store/products");

const productsController = {
  getProductsView: (_req, res) => {
    res.render("products.ejs", {
      headTitle: "Shop - Products",
      path: "/",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/products",
      products: productsSlice.products,
    });
  },

  getAddProductView: (_req, res) => {
    res.render("add-product.ejs", {
      headTitle: "Shop - Add product",
      path: "/add",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/products/add",
    });
  },

  addNewProduct: (req, res) => {
    productsSlice.newestProduct = req.body;
    productsSlice.products.push(req.body);
    res.status(STATUS_CODE.FOUND).redirect("/products/new");
  },

  getNewProductView: (_req, res) => {
    res.render("new-product.ejs", {
      headTitle: "Shop - New product",
      path: "/new",
      activeLinkPath: "/products/new",
      menuLinks: MENU_LINKS,
      newestProduct: productsSlice.newestProduct,
    });
  },

  getProductView: (req, res) => {
    const product = productsSlice.products.find(p => p.name === req.params.name);
    if (product) {
      res.render("product.ejs", {
        headTitle: `Shop - ${product.name}`,
        path: `/products/${product.name}`,
        activeLinkPath: "/products",
        menuLinks: MENU_LINKS,
        product,
      });
    } else {
      res.status(STATUS_CODE.NOT_FOUND).send("Produkt nie znaleziony");
    }
  },

  deleteProduct: (req, res) => {
    const index = productsSlice.products.findIndex(p => p.name === req.params.name);
    if (index !== -1) {
      productsSlice.products.splice(index, 1);
      res.status(STATUS_CODE.OK).json({ success: true });
    } else {
      res.status(STATUS_CODE.NOT_FOUND).json({ success: false });
    }
  },
};

module.exports = productsController;
