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
      const str = $('.form input[name=email]').val().trim();
      const correct = str.length >= 6    // минимальная длина для точки, собаки, домена + по букве между ними
      && str.includes('@')    // есть собака
      && str.includes('.');   // есть точка

    if(!correct){
       $(".form").css({
         borderTop: "2px solid #ff0000",
         borderBottom: "2px solid #ff0000"
       });
    } else{
    $('.form input[name=email]').val("");
    $(".form").css({
         borderTop: "2px solid #666666",
         borderBottom: "2px solid #666666"
       });
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

});
