'use strict';

var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.end('Hello world');
});

app.listen(3000, function () {
    console.log('UP AND RUNNING!');
});