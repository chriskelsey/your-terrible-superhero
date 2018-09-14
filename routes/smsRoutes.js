const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var MessagingResponse = require('twilio').twiml.MessagingResponse;
//var QuizResponse = require('../models/QuizResponse');
var quiz = require('./apiRoutes');

// Handle SMS submissions
module.exports = function(req, res) {
    console.log('SMS Posted');
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
    /*var phone = req.body.From;
    var input = req.body.Body;

    // respond with message TwiML content
    function respond(message) {
        var twiml = new MessagingResponse();
        twiml.message(message);
        res.type('text/xml');
        res.send(twiml.toString());
    }

    // Check if there are any responses for the current number in an incomplete state
    QuizResponse.findOne({
        phone: phone,
        complete: false
    }, function(err, doc) {
        if (!doc) {
            var newQuiz = new QuizResponse({
                phone: phone
            });
            newQuiz.save(function(err, doc) {
                // Skip the input and just ask the first question
                handleNextQuestion(err, doc, 0);
            });
        } else {
            // After the first message, start processing input
            QuizResponse.advanceSurvey({
                phone: phone,
                input: input,
                quiz: quiz
            }, handleNextQuestion);
        }
    });

    // Ask the next question based on the current index
    function handleNextQuestion(err, surveyResponse, questionIndex) {
        var question = quiz[questionIndex];
        var responseMessage = '';

        if (err || !surveyResponse) {
            return respond("I'm sorry, I didn't get that"
                + "Please retry your message.");
        }

        // If question is null, we're done!
        if (!question) {
            return respond('Thank you for taking this survey. Goodbye!');
        }

        // Add question text
        responseMessage += question.text;

        // reply with message
        respond(responseMessage);
    }*/
};
