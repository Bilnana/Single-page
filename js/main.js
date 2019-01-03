$( document ).ready(function() {
  isSmallDevice ();
  swiper();
  questions();
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
  
function questions() {
  // var imgUrl = $('.questions').find('img').attr('src');
  // console.log(imgUrl);
}


