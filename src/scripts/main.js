$(document).ready(function() {

  // Set the event handler focus (#email-user)

  $('#email-user').focus(function(){
       $(".form").css({
         borderTop: "2px solid #781241",
         borderBottom: "2px solid #781241"
       });
  });

  //Validation email

   $('.form-button').click(function(){
      var str = $('.form input[name=email]').val().trim();
      var correct = str.length >= 6
      && str.includes('@')
      && str.includes('.');

    if(!correct){
       $(".form").css({
         borderTop: "2px solid #ff0000",
         borderBottom: "2px solid #ff0000"
       });
    } else{
    $('.form input[name=email]').val("");

    //border form - green
    $(".form").css({
         borderTop: "2px solid green",
         borderBottom: "2px solid green"
       });

    //border form - gray
    setTimeout(
      function(){
         $(".form").css({
         borderTop: "2px solid #666666",
         borderBottom: "2px solid #666666"
       });
      }, 1500);
    }
  })

 //Return border - default

  $(function(){
    $(document).click(function(event) {
      if ($(event.target).closest(".form").length) return;
       $(".form").css({
           borderTop: "2px solid #666666",
           borderBottom: "2px solid #666666"
         });
      event.stopPropagation();
    });
  });

  //slick-slider

  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //form - mailchimp

  $('.form').ajaxChimp({
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
  });

});
