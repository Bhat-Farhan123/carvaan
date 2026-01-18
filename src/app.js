const express = require("express");
const carvaanImport = require("./models/contactSchema");
const app = express();
require("./db/conn");
const hbs = require("hbs");
const PORT = process.env.PORT || 3000;
const path = require("path");

// middleware
app.set("view engine", "hbs"); // set the view engine to hbs
//setting paths
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../template/views"));
hbs.registerPartials(path.join(__dirname, "../template/partials"));
app.use(express.urlencoded({ extended: false })); // to parse form data
app.use(express.json()); // to parse json data

//lets add bootstrap here

app.get("/", (req, res) => {
  //res.send("Hello, World!");
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/service", (req, res) => {
  res.render("service");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// create a new contact us page in database---------------

app.post("/contact", async (req, res) => {
  try {
    const userData = new carvaanImport(req.body);
    await userData.save();
    res.status(201).render("home");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
