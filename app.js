var app = require('express')();
var express = require('express');
var mysql = require('mysql');
var http = require('http').Server(app);
app.use(express.static(__dirname + '/'));


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database: 'food'
});
connection.connect();

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/product-name', function (req, res) {

    connection.query('SELECT * FROM products', function(err, result) {
        if (err) throw err;
        var arr = [];
            for(var i = 0; i < result.length; i++) {
                arr[i] = result[i].name;
            };
        res.send(arr);
    });

});

app.get('/product', function (req, res) {

    connection.query('SELECT * FROM products WHERE name=?', req.query.name, function(err, result) {
        if (err) throw err;
        res.send(result[0]);
    });

});


http.listen(3000, function () {
    console.log('Listen on 3000');
});






