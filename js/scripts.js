//Back end

$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userColor = $("input:radio[name=color]:checked").val();
    var userFood = $("input:radio[name=food]:checked").val();

    if(userColor === "green" && userFood === "cake") {
      $(".profile").hide();
      $("#Yoshi").show();
    }
    else if (userColor === "green" && userFood === "pizza") {
      $(".profile").hide();
      $("#Luigi").show();
    }
    else if (userColor === "pink" && userFood === "cake") {
      $(".profile").hide();
      $("#Peach").show();
    }
    else if (userColor === "pink" && userFood === "pizza") {
      $(".profile").hide();
      $("#Birdo").show();
    }
    else if (userColor === "red" && userFood === "cake") {
      $(".profile").hide();
      $("#Toad").show();
    }
    else if (userColor === "red" && userFood === "pizza") {
      $(".profile").hide();
      $("#Mario").show();
    }
    else {
      // nothing
    }
  });
});


// //Front end
// $(function() {
//
//
//
// });
