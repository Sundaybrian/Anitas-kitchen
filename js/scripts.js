$(document).ready(function() {
  $("form#subscriptionForm").submit(function (event) {
    var userEmail= $("input#subscribeEmail").val();
    console.log(userEmail);

    if (userEmail==='') {
      alert("Please Enter a valid email");


    }else {
      alert(userEmail  + "Thank You For Subscribing" );
    }
    event.preventDefault();
  });

});
