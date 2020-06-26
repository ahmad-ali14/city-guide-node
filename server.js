var express = require('express');
var cors = require('cors')


var app = express();

app.use(cors())


app.get('/pharmacies', async (req, res) => {
    let scrapPharmacies = require('./src/pharmacies');
    var pharmacies = await scrapPharmacies("https://www.yell.com/s/pharmacies-harrow.html");
    res.json(pharmacies)
})



app.get('/colleges', async (req, res) => {
    let scrapPharmacies = require('./src/pharmacies');
    let colleges_url = "https://www.yell.com/ucs/UcsSearchAction.do?scrambleSeed=1579292639&selectedClassification=Schools%20and%20Colleges&keywords=colleges&location=Harrow"
    var colleges = await scrapPharmacies(colleges_url);
    res.json(colleges)
})
const Port = 5000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`);

})