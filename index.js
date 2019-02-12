var express = require('express');
var app = express();



app.get('/', function(req, res) {
    res.send("<u><b>Hello</b></u> <i><u>world!</u></i>");
});

app.listen(8080);
console.log('server running on http://localhost:8080');