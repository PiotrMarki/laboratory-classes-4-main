const { getProcessLog } = require('../utils/logger.js'); 

const logoutController = {
  getLogoutView: (req, res) => {
    res.render('logout'); 
  },

  killApplication: () => {
    getProcessLog(); 
    console.log("Zamykanie aplikacji...");
    process.exit(); 
  }
};

module.exports = logoutController;