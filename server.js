
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var controller = require('./controllers/controller.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controller);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
