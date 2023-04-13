var express = require('express');
var ejs = require('ejs');

var app = express();

app.use(express.static('public'));

app.listen(8080);

app.get('/', function(req, res){
    res.send("Hello");
});