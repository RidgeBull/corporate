//==========================================================================
//factory.js
//==========================================================================

//slider
//---------------------------------------------------------
function initSlider() {
  $('.js-slider').not('.slick-initialized').slick({
    responsive: [{
        breakpoint: 9000,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          dots: false,
          infinite: true,
          speed: 500,
          arrows: true,
          cssEase: 'ease-out',
          centerPadding: '40px',
          prevArrow: $('.c-btn__prev'),
          nextArrow: $('.c-btn__next')
        }
      },
    ]
  });
}

//checkKeywork
//---------------------------------------------------------
function checkKeywork() {
  if ($('.p-tag__item')[0]) {
    $('.p-tag__item').each(function() {
      if ($(this).text().length > 23) {
        if ($(window).width() >= 768) {
          if ($(this).height() > 60) {
            $(this).removeClass("p-tag__item--big").addClass("p-tag__item--round");
          } else {
            $(this).removeClass("p-tag__item--round").addClass("p-tag__item--big");
          }
        }
        else{
          if ($(this).height() > 120*$(this).width()/750) {
            $(this).removeClass("p-tag__item--big").addClass("p-tag__item--round");
          } else {
            $(this).removeClass("p-tag__item--round").addClass("p-tag__item--big");
          }
        }
      }
    });
  }
  if ($('.p-keywork__item')[0]) {
    $('.p-keywork__item').each(function() {
      if ($(this).text().length > 23) {
        if ($(window).width() >= 768) {
          if ($(this).height() > 58) {
            $(this).removeClass("p-keywork__item--big").addClass("p-keywork__item--round");
          } else {
            $(this).removeClass("p-keywork__item--round").addClass("p-keywork__item--big");
          }
        }
        else{
          if ($(this).height() > 120*$(this).width()/750) {
            $(this).removeClass("p-keywork__item--big").addClass("p-keywork__item--round");
          } else {
            $(this).removeClass("p-keywork__item--round").addClass("p-keywork__item--big");
          }
        }
      }
    });
  }
}

//init
//---------------------------------------------------------
$(function() {
  initSlider();
  checkKeywork()
});

$(window).on('resize', function() {
  var win = $(this);
  if (win.width() <= 768) {
    initSlider();
  }
  checkKeywork()
});