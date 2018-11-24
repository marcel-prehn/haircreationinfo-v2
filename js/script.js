$(document).ready(function() {

  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $(function() {
    $('.gallery a').lightbox();
  });

  $(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });
  
});