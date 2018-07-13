const express = require('express');
const app = express();

const calculateNextState = require('./calc.js');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculate', (req, res) => {
    let calcObj = JSON.parse(calculateNextState(req.body.calculatorState, req.body.input));
    res.json(calcObj);
});

//listen to port
app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;