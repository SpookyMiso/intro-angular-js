var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

