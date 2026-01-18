const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/carvaanDB")
  .then(() => {
    console.log("Connection successful with carvaanDB");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
