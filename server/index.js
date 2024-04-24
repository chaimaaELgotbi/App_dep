const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

const MONGO_URI = `mongodb+srv://encmmaroc:encmtest@cluster0.bj9ky5j.mongodb.net/`
// const MONGO_URI = "mongodb://host.docker.internal:27017/mydata"
// Connect DB
mongoose
  .connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true ,family:4})
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server is running on port 5000"));
