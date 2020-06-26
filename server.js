var express = require('express');
var cors = require('cors');
const scrap = require('./src/scrapFunction');


var app = express();

app.use(cors())


app.get('/pharmacies', async (req, res) => {
    var pharmacies = await scrap("https://www.yell.com/s/pharmacies-harrow.html");
    res.json(pharmacies)
})


app.get('/colleges', async (req, res) => {
    let colleges_url = "https://www.yell.com/ucs/UcsSearchAction.do?scrambleSeed=1579292639&selectedClassification=Schools%20and%20Colleges&keywords=colleges&location=Harrow"
    var colleges = await scrap(colleges_url);
    res.json(colleges)
})


app.get('/hospitals', async (req, res) => {
    let hospitals_url = "https://www.yell.com/ucs/UcsSearchAction.do?keywords=hospitals&location=Harrow&scrambleSeed=1305200660"
    var hospitals = await scrap(hospitals_url);
    res.json(hospitals)
})

app.get('/doctors', async (req, res) => {
    let doctors_url = "https://www.yell.com/ucs/UcsSearchAction.do?keywords=doctors+%28medical+practitioners%29&location=Harrow&scrambleSeed=386313073"
    var doctors = await scrap(doctors_url);
    res.json(doctors)
})



const Port = 5000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`);

})