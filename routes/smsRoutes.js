var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var MessagingResponse = require('twilio').twiml.MessagingResponse;
var db = require("../models");
var quiz = {
    q2: "On a scale of 7 to 14, can you turn invisible?",
    q3: "On a scale of 1 to 10 are you afraid of the dark?"
}

// Handle SMS submissions
module.exports = function(app) {

    app.post("/sms", function(req, res) {
        var phone = req.body.From;
        var input = req.body.Body;
        db.response.findOne({where: {phone:phone}
        }).then(function(response){
            if(response.dataValues.q1 == null){
                db.response.update({q1:input},{where: {phone:phone}});
                respond(quiz.q2,res);
            }else {
                if(response.dataValues.q2 == null){
                    db.response.update({q2:input},{where: {phone:phone}});
                    respond(quiz.q3,res);
                } else {
                    db.response.update({q3:input},{where: {phone:phone}});
                    respond("Congrats you got Hellcow! Seriously, what's wrong with you?",res);
                }
            }
        });
    });

    // respond with message TwiML content
    function respond(message,res) {
        var twiml = new MessagingResponse();
        twiml.message(message);
        res.type('text/xml');
        res.send(twiml.toString());
    }
};
