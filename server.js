require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, options, function (err) {
  if (!err) {
    console.log("Mongodb connected...");
  } else {
    console.log(err);
  }
});

app.checkout("/", (req, res) => {
  res.send("Express here");
});

app.listen(3001, function () {
  console.log("Express is running");
});
