var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.json({
        Author: 'ahmad'
    })
})

const Port = 3000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`);

})