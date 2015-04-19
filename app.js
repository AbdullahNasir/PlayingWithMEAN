/**
 * Created by Abdullah on 4/19/2015.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;

db.on('error',function(){
   console.log('error connecting to mongodb');
});

db.once('open', function (callback) {
   console.log('connected to mongodb');
});

var routes = require('./routes/routes')

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', routes);

var server = app.listen(3000, function () {
   console.log('server listening to port 3000');
});