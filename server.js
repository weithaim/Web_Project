const express = require('express');
const app = express();

const calculateNextState = require('./calc.js');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculate', (req, res) => {
    let calculatorState = req.body.calculatorState ? JSON.stringify(req.body.calculatorState) : null;
    let calcObj = JSON.parse(calculateNextState(calculatorState, req.body.input));
    res.json(calcObj);
});

//listen to port
let server = app.listen(3000, () => console.log('listening on port 3000'));

module.exports = server;