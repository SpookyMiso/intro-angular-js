var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', function (req, res, next) {
  res.json([
    { title: '007: Spectre', year: 2015 },
    { title: 'Godzilla', year: 1954},
    { title: 'Pulp fiction', year: 1994 }
    ]);

});


var server = app.listen(8080, function() {
  console.log('Server running');
});

