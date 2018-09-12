var db = require("../models");
var express = require('express');
var path = require('path');

//var db = require("../../models");

//create Router instance by invoking method
var router = express.Router();

var bodyParser = require("body-parser");
var parseUrlEncoded = bodyParser.urlencoded({
    extended: false
});



module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
/*
//to get latest entry in table 2
var latestUser;
var latestUserScore;
db.table2.findAll({
  limit: 1,
  order: [["createdAt", "DESC"]]
}).then(function(user){
  latestUser = user.id;
  latestUserScore = (user.score1 + user.score2 + user.score3 + user.score4 + user.score5);
  return latestUserScore;
}).then(function(latestUserScore));

function bestMatch(callback) {
  //get all heros
  db.hero.findAll().then(function(heroArr){
  //setting default values     
    var heroUserDifference = Infinity;
    var heroIndex = 0; //default hero match is array position 0
    var heroMatch = heroArr[heroIndex];
    
    for (var i = 0; i < heroArr.length; i++) {
      let heroScoreVariance = Math.abs(heroArr[i].score - latestUserScore);
      
    }
    //compare heroScoreVariance with heroUserDifference and assign //lower to heroUserDifference; Set hero id to [i].
    //if (heroScoreVariance < heroUserDifference) {
      heroUserDifference = heroScoreVariance;
      heroIndex = i;
      
    }
    

  })
}
*/