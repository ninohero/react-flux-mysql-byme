var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 9221);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exteded: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen('Express server listening on port ' + app.get('port'));
