const express = require("express");
const path = require("path");
const gpio = require("rpi-gpio");

const app = express();

//change the values for the pins you want to use
const pins = [7, 11, 13, 15, 16, 18, 22, 29];

pins.forEach(pin => {
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

app.post("/:id", function(req, res) {
  if (req.params.id >= 1 && req.params.id <= 8) {
    writePin(req.params.id);
  } else {
    res.status(404).json("Invalid pin number");
  }
});

app.listen(3000, function() {
  console.log("Simple LED Control Server Started on Port: 3000!");
});
