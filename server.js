require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
//var sequelize = new Sequelize();
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 1337;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/smsRoutes")(app);

const heroArray = require("./models/heroSeed");
const responseArray = require("./models/responseSeed");
var heroes = heroArray();
const responses = responseArray();

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port "+ PORT);
  });
});.then(function() {
  db.hero.bulkCreate(heroes);
  db.response.bulkCreate(responses);
});

module.exports = app;
