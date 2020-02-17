// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

// initialize our express app
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
let port = 1234;


let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//PATHS
const stringrayroutes = require("./routes/stringray.route"); // Imports routes for the products
const vimdieselroutes = require("./routes/vimdiesel.route"); // Imports routes for the products

app.use("/stringrays", stringrayroutes);
app.use("/vimdiesels", vimdieselroutes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});