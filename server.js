var express = require('express');
var cors = require('cors');
const scrap = require('./src/scrapFunction');


var app = express();

app.use(cors())


app.get('/:city/pharmacies', async (req, res) => {
    var pharmacies = await scrap(`https://www.yell.com/ucs/UcsSearchAction.do?keywords=Pharmacies&location=${req.params.city}&scrambleSeed=19862102`);
    res.json(pharmacies)
})


app.get('/:city/colleges', async (req, res) => {
    let colleges_url = `https://www.yell.com/ucs/UcsSearchAction.do?scrambleSeed=1579292639&selectedClassification=Schools%20and%20Colleges&keywords=colleges&location=${req.params.city}`
    var colleges = await scrap(colleges_url);
    res.json(colleges)
})


app.get('/:city/hospitals', async (req, res) => {
    let hospitals_url = `https://www.yell.com/ucs/UcsSearchAction.do?keywords=hospitals&location=${req.params.city}&scrambleSeed=1305200660`
    var hospitals = await scrap(hospitals_url);
    res.json(hospitals)
})

app.get('/:city/doctors', async (req, res) => {
    let doctors_url = `https://www.yell.com/ucs/UcsSearchAction.do?keywords=doctors+%28medical+practitioners%29&location=${req.params.city}&scrambleSeed=386313073`
    var doctors = await scrap(doctors_url);
    res.json(doctors)
})



const Port = 5000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`);

})