$( document ).ready(function() {
  swiper();
  responsiveNavigation();
  navToggleTriger();
});

function swiper() {
  var swiperQuptes = new Swiper('.slider-comments__inner ', {
    autoplay: true
  });

  var swiperResults = new Swiper('.slider-results__inner', {
    autoplay: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
}

function responsiveNavigation() {
  var wWidth = $(window).width();
    if (wWidth <= 1024) {
      $('.nav-toggle').removeClass('hidden');
      $('body').removeClass('desktop').addClass('smallDevices');
    } else {
      $('.nav-toggle').addClass('hidden');
      $('body').removeClass('smallDevices').addClass('desktop');
    }
}

function navToggleTriger () {
  $('.nav-toggle').on('click', function () {
    $('.header-menu').toggleClass('open');
  });
}
