require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const carRoutes = require("./routes/carRoutes");

const app = express();
app.use(express.json());

app.use("/api/cars", carRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log(err));
