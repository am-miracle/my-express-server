const express = require('express');
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.post('/', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send(`The result of the calculation is ${result}`);
})

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmiCalculator', (req,  res) => {
    const h = parseFloat(req.body.height);
    const w = parseFloat(req.body.weight);
    const bmi = w / (h * w);
    res.send(`The bmiCalculation is ${bmi}`)
})

app.listen(port, () => {
    console.log(`Port running on port ${port}`)
})