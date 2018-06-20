$('.nav')
  .find('a')
  .click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
    var section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });
  });
