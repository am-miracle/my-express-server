const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/bmiCalculator.html', (req, res) => {
    res.sendFile(__dirnmae + "/bmiCalculator.html")
})

app.post('/bmiCalculator.html', (req,  res) => {
    const h = Number(req.body.height);
    const w = Number(req.body.weight);
    const result = h + w;
    res.send(`The bmiCalculation is ${result}`)
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})