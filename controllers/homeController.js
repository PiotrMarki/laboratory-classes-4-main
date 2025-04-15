const homeController = {
    getHomeView: (_req, res) => {
      res.render("home.ejs", {
        headTitle: "Shop - Home",
        path: "/",
      });
    },
  };
  
  module.exports = homeController;
  