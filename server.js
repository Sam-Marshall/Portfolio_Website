//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/public"));

app.listen(app.get('port'), function() {
    console.log("App listening on PORT " + app.get('port'));
});

require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);