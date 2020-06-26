var express = require('express');
var cors = require('cors')


var app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        Author: 'ahmad'
    })
})

app.get('/pharmacies', async (req, res) => {
    let scrapPharmacies = require('./src/pharmacies');
    var pharmacies = await scrapPharmacies("https://www.yell.com/s/pharmacies-harrow.html");
    res.json(pharmacies)
})

const Port = 5000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`);

})