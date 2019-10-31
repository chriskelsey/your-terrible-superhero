var db = require("../models");
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var MessagingResponse = require('twilio').twiml.MessagingResponse;


module.exports = function(app) {
//to get latest entry in table 2
var latestUser;
var latestUserScore;
db.response.findAll({
  limit: 1,
  order: [["createdAt", "DESC"]]
}).then(function(user){
  latestUser = user.id;
  latestUserScore = (user.score1 + user.score2 + user.score3 + user.score4 + user.score5);
}).then(function(latestUserScore){
  return latestUserScore;
  bestMatch();
});

function bestMatch() {
  //get all heros from table
  db.hero.findAll({}).then(function(heroArr){
  //setting default values     
    var heroUserDifference = Infinity;
    var heroIndex = 0; //default hero match is array position 0
    var heroMatch = heroArr[heroIndex];
    
    for (var i = 0; i < heroArr.length; i++) {
      let heroScoreVariance = Math.abs(heroArr[i].score - latestUserScore);
      if (heroScoreVariance < heroUserDifference) {
        heroUserDifference = heroScoreVariance;
        heroIndex = i;
        };
    }
    res.json(heroMatch);
    
  })
}

  //When a phone number is picked up pass it on to Twilio
  app.post("/api/phone", function(req, res) {
    // Take the request...
    var quiz = req.body;
    var qOne = quiz.q1;
    var phone = quiz.phone;

    //Send the first message
    client.messages
      .create({
      body: qOne,
      from: process.env.TWILIO_NUMBER,
      to: phone
    }).then(function(){insertOrUpdate(
        {phone:phone, q1:null, q2:null,q3:null, q4:0,q5:0},
        {phone:phone}
      )}).done();
  });
};

//This function creates a new row or updates an existing one.
function insertOrUpdate(values, condition){
  return db.response.findOne({ 
    where: condition 
  }).then(function(obj){
    if(obj) {
      return obj.update(values);
    }else {
      return db.response.create(values);
    }
  });
}