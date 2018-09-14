const express = require('express');
const message = require('../routes/apiRoutes');
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

var router = express.Router();

  //When a phone number is picked up pass it on to Twilio
router.get("/api/phone", function(req, res) {
    // Take the request...
    var quiz = req.body;
    console.log(quiz);
  });



//let questionOne = quiz[0].questions[Object.keys(quiz[0].questions)[0]];
//let phone = quiz[0].phone;

/*client.messages
  .create({
     body: questionOne,
     from: process.env.TWILIO_NUMBER,
     to: phone
   }).then(message => {
        console.log(message.sid);
   });*/

module.exports = router;
