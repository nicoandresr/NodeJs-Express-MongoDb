var mongodb = require('mongodb');
var fs = require('fs');
var uri = 'mongodb://localhost:27017/databaseName';
var initialData = 'initialData.json'
var express = require('express');

mongodb.MongoClient.connect(uri, function (error, db) {
    errorHandler(error);

    db.collection('colletionName').find().toArray(function (error, docs) {
        errorHandler(error);

        var server = express();

        server.get('/', function (req, res) {
            res.send('Hello world!');
        });

        server.get('/RouteName', function (req, res) {
            res.send(JSON.stringify(docs));
        });

        server.listen(3000);

    });
});

function errorHandler(error) {
    if (!error) return;
    console.log(error);
    process.exit(1);
}