$('.carousel').carousel({
  interval: 8000
});

$('.home a[href^="#"]').click(function(e){

  var target = $(this).attr('href');
  var strip = target.slice(1);

  var anchor = $("section[id='" + strip + "']");

  e.preventDefault(); //zapobiega przeładowaniu

 // var ost = anchor.offset().top-$('.navbar-default').height();

 var ost = anchor.offset().top;

 var time = $(window).scrollTop() + ost;

  $('html, body').animate({

    scrollTop: ost

}, time*3/4);

});
