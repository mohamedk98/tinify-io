const path = require("path");
//Redirect to / if there is error
exports.errorPageHandler = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
};
