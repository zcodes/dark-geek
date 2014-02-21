$(document).ready(function() {

  function goto_top() {
    $(window).scroll(function(e) {
      if ($(window).scrollTop() > 200) {
        $("#back-top").fadeIn(1000);
      } else {
        $("#back-top").fadeOut(1000);
      }
    });
  }

  $("#back-top").click(function(e) {
    $("body,html").animate({scrollTop: 0}, 500);
  });

  goto_top();

});
