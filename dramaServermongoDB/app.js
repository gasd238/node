var  express = require('express');
var logger = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');
var assert = require('assert');

var app = express();
const MongoClient = require('mongodb');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'pug');
app.set('viwes', './views');

app.use()

app.listen(8080, ()=>{
    console.log('8080포트에서 머대기중');
});