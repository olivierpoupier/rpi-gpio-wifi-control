const express = require("express");
const path = require("path");
const gpio = require("rpi-gpio");

const app = express();

//change the values for the pins you want to use
const pins = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach(pin => {
  gpio.setup(pin, DIR_OUT, write);
});

function writePin(pin) {
  const pin = pins[pin - 1];
  const state = gpio.read(pin);

  gpio.write(pin, !state, function(err) {
    if (err) throw err;
    console.log("Written True to pin");
    console.log(path.join(__dirname, "public"));
  });
}

app.set("view engine", ejs);
app.use(static(path.join(__dirname, "public")));

console.log(path.join(__dirname, "public"));

app.get("/", function(req, res) {
  res.render("index", { status: "Press Button To change Status of Led !!" });
});

app.post("/1", function(req, res) {
  writePin(1);
});
app.post("/2", function(req, res) {
  writePin(2);
});
app.post("/3", function(req, res) {
  writePin(3);
});
app.post("/4", function(req, res) {
  writePin(4);
});
app.post("/5", function(req, res) {
  writePin(5);
});
app.post("/6", function(req, res) {
  writePin(6);
});
app.post("/7", function(req, res) {
  writePin(7);
});
app.post("/8", function(req, res) {
  writePin(8);
});

app.listen(3000, function() {
  console.log("Simple LED Control Server Started on Port: 3000!");
});
