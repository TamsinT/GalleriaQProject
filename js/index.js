$(document).ready(function(){

  $('#menuButton').on('click', menubuttonhandler);

  function menubuttonhandler(b) {
    console.log('menu clicked');

     $('.menuItem').toggle(600);
  }

  $(".menuItem").on('click', menuHandler);

  function menuHandler(e) {
    console.log('summary shown');

    //For the item that was clicked on, is is already open
    var isOpen = $(e.currentTarget).hasClass('open');

    //close the menu item that is currently open
    $('.open .menuContent').toggle(500);
    $('.open').removeClass('open');

    //only expand the item that was clicked on, if it was not already open
    if(!isOpen) {
      $('.menuContent', e.currentTarget).toggle(500);
      $(e.currentTarget).addClass('open');
    }


    //$('.open').removeClass('open');
  }

$("#signUp").on('click', submitEmail);

    function submitEmail() {
     console.log('email saved');

     window.alert("Thanks! You are now subscribed to Galleria's Newsletter!")

     /*  $('.thanksAlert').show();  */
   }


    var slideCount = $('#slider ul li').length;
   	var slideWidth = $('#slider ul li').width();
   	var slideHeight = $('#slider ul li').height();
   	var sliderUlWidth = slideCount * slideWidth;

   	$('#slider').css({ width: slideWidth, height: slideHeight });

   	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

       function moveLeft() {
           $('#slider ul').animate({
               left: + slideWidth
           }, 400, function () {
               $('#slider ul li:last-child').prependTo('#slider ul');
               $('#slider ul').css('left', '');
           });
       };

       function moveRight() {
           $('#slider ul').animate({
               left: - slideWidth
           }, 400, function () {
               $('#slider ul li:first-child').appendTo('#slider ul');
               $('#slider ul').css('left', '');
           });
       };

       $('a.controlPrev').click(function (a) {
         a.preventDefault();
           moveLeft();
       });

       $('a.controlNext').click(function (b) {
         b.preventDefault();
           moveRight();
       });

});
