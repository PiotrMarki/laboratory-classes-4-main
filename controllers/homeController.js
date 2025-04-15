exports.getHomeView = (request, response) => {
    response.render("home", { title: "Home" });
};