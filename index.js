const express = require("express");
const path = require("path");
const gpio = require("rpi-gpio");

const app = express();

//change the values for the pins you want to use
const pins = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach(pin => {
    gpio.setup(pin, DIR_OUT, write);
});

app.set('view engine', ejs);
app.use(static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){ 
    res.render('index',{status:"Press Button To change Status of Led !!"});
});

app.post('/1', function(req, res){
    const pin = pins[0];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/2', function(req, res){
    const pin = pins[1];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/3', function(req, res){
    const pin = pins[2];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/4', function(req, res){
    const pin = pins[3];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/5', function(req, res){
    const pin = pins[4];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/6', function(req, res){
    const pin = pins[5];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/7', function(req, res){
    const pin = pins[6];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});
app.post('/8', function(req, res){
    const pin = pins[7];
    const state = gpio.read(pin);

    gpio.write(pin, !state, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        console.log(path.join(__dirname, 'public'));
    });
});

app.listen(3000, function () {
    console.log('Simple LED Control Server Started on Port: 3000!');
});
