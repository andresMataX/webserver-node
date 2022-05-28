const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Home Page');
});

app.get('/hola-mundo', function (req, res) {
    res.send('Saludando al mundo');
});

app.get('*', function (req, res) {
    res.send('404 | Page Not Found');
});

app.listen(8080);