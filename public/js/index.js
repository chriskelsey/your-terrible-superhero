//Capture form Data
$(".btn").on("click", function(e) {
  e.preventDefault();

  //Convert the phone to E.164 format
  var reg =/(\(|\)|-|\s)+/g;
  var phoneForm = "+1" + $("#phone").val().trim();
  var phone = phoneForm.replace(reg, "");

//Build the Quiz Questions
  var quizQuestions = {
    phone: phone,
    q1: "On a scale of 1 to 5, how strong are you feeling?"
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/phone", quizQuestions);
});
