//Capture form Data
$(".btn").on("click", function(e) {
  e.preventDefault();

  //Convert the phone to E.164 format
  var reg =/(\(|\)|-|\s)+/g;
  var phoneForm = '+1' + $("#phone").val().trim();
  var phone = phoneForm.replace(reg, '');

//Build the Quiz Questions
  var quizQuestions = {
    phone: phone,
    q1: 'Please tell us your age.',
    q2: 'Have you ever jump-kicked a lemur?',
    q3: 'Who is your favorite Teenage Mutant Ninja Turtle and why?'
    };

  // send an AJAX POST-request with jQuery
  $.post("/api/phone", quizQuestions);
});
