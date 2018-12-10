const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
//const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const env = process.env;
require('dotenv').config();

// this is our MongoDB database
const dbRoute = "mongodb://dangdang"+process.env.DB_PASS+"@ds121624.mlab.com:21624/bankdb";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//fetch all the data from database
// router.get("/getData", (res,req) => {
// 	const{ id } = req.body;
// 	Data.find((id , err) => {
// 		if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
// 	});
// });

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));