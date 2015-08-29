var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(8080, function() {
  console.log('Server running');
});
