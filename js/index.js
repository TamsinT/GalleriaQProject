$(document).ready(function(){

  $('#menuButton').on('click', menubuttonhandler);

  function menubuttonhandler(b) {
    console.log('menu clicked');

     $('.menuItem').toggle(600);
  }

  $(".menuItem").on('click', menuHandler);

  function menuHandler(e) {
    console.log('summary shown');

    $('.open .menuContent').toggle(500);
    $('.open').removeClass('open');

    $('.menuContent', e.currentTarget).toggle(500);
    $(e.currentTarget).addClass('open');
    $('.open').removeClass('open');

  }


$("#signUp").on('click', submitEmail);

    function submitEmail() {
     console.log('email saved');

     window.alert("Thanks! You are now subscribed to Galleria's Newsletter!")

     /*  $('.thanksAlert').show();  */
   }



});
