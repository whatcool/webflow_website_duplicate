const express = require("express")
const bodyParser = require("body-parser")
const { application } = require("express")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, function() {
    console.log("The server has been started at port 5000");
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/BMIindex.html");
})

app.post("/", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi);
})