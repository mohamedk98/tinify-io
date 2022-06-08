//environment variable file
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
//Port and host for development and production
const port = process.env.PORT || 3001;
const host = "0.0.0.0";

const app = express();
const urlRoutes = require("./routes/url");
const errorRoutes = require("./routes/error");

app.use(express.static(path.resolve(__dirname, "../client/build")));

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://tinify-io.herokuapp.com");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

  next();
});

app.use(express.json());
app.use(errorRoutes);
app.use(urlRoutes);


//mongodb connection
/**NOTE:listen to the server first before connecting to DB
 * as heroku has port binding time out of 60 secodns and it takes more than that
 */
app.listen(port, host, () => {
  mongoose.connect(process.env.DB_CONNECTION, { dbName: "tinify" }).then(() => {
    console.log(`Server listening on ${port}`);
  });
});
