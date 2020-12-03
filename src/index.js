import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Persons from "./routes/Persons";
const connectDB = require("../config/db");

const app = express();

connectDB();

//app.use(express.json());
// console.log(process.env.MONGODB_URL)
// mongoose.connect(process.env.MONGODB_URL, {
//   useMongoClient: true,
// })

app.use(bodyParser.json());

app.use("/api/persons", Persons);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost:8080"));
