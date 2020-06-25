var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.json({
        Author: ahmad
    })
})

app.listen(() => {
    console.log('app listening on port 3000');

})