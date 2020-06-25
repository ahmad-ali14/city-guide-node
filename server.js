var express = require('express');
var cors = require('cors')


var app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        Author: 'ahmad'
    })
})

app.get('/pharmacies', (req, res) => {
    res.json({
        Author: 'ahmad'
    })
})

const Port = 5000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`);

})