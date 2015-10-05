$(document).ready(function(){

  $(".menuItem").on('click', menuHandler);

  function menuHandler(e) {
    console.log('summary shown');

    $('.menuContent', e.currentTarget).toggle();
  }

});
