const mongoose = require("mongoose");
const validator = require("validator");

//schema design

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLingth: 3,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email format");
      }
    },
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//now we have to create a model
// collection creation
const carvaanExport = mongoose.model("carvaan1", contactSchema); //students is the collection name

module.exports = carvaanExport;
