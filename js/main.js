$( document ).ready(function() {
  isSmallDevice ();
  swiper();
});

/* Window width on small devices */
function isSmallDevice () {
  var width = $(window).width();

  if (width <= 1200) {
    $('body').addClass('s-device')
  }
  else {
    $('body').addClass('b-device')
  }
}


function swiper() {

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


