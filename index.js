'use strict';

var express = require('express'),
    morgan = require('morgan'),
    fs = require('fs'),
    app = express();

app.set('env', 'development');

app.use(morgan('combined', {
    stream: fs.createWriteStream(__dirname + '/logs/access.log', { flags: 'a' })
}));

app.use(morgan('combined', {
    skip: function (req, res) { return res.statusCode < 400 },
    stream: fs.createWriteStream(__dirname + '/logs/error.log', { flags: 'a' })
}));

app.get('/', function (req, res) {
    res.end('Hello world');
});

app.get('/error', function (req, res) {
    throw new Error('This is error');
    res.end('Hello error');
});

app.listen(3000, function () {
    console.log('UP AND RUNNING!');
});