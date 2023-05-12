//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1 || ua.indexOf('Android') != -1 && ua.indexOf('Mobile') != -1) {
    //sp
    $('body').addClass('is-view-sp');
  } else if (ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1) {
    //tab
    $('body').addClass('is-view-tab');
  } else {
    // pc
    $('body').addClass('is-view-pc');
  }
  if ((typeof window.ontouchstart !== 'undefined') == true) {
    $('body').addClass('is-touch');
  }
}


//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') !== -1) {
    $('body').addClass('is-view-ie');
  }
}


//sprite svg
//---------------------------------------------------------
function spriteSvg() {
  $.ajax({
    type: 'get',
    url: '/assets/images/sprite.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
}


//menu
//---------------------------------------------------------
function menu() {
  const $menuTrriger = $('.js-hamburger');
  const $menuTarget = $('.js-menu');
  let scrollPosition;
  //menuTrriger
  $menuTrriger.on('click', function() {
    if (!$(this).hasClass('is-open')) {
      $menuTrriger.addClass('is-open');
      $menuTarget.addClass('is-open').fadeIn();
      scrollPosition = $(window).scrollTop();
      $('body').addClass('is-locked').css({ 'top': -scrollPosition });
    } else {
      $menuTrriger.removeClass('is-open');
      $menuTarget.removeClass('is-open');
      $('body').removeClass('is-locked').css({ 'top': '' });
      window.scrollTo(0, scrollPosition);
    }
  });
}


//drop down nav
//---------------------------------------------------------
function dropNav() {
  $('.js-drop-nav').hover(function() {
    $(this).toggleClass('is-drop-nav-active');
  });
}


//pagetop
//---------------------------------------------------------
function pagetop() {
  const pagetopTrigger = $('.js-pagetop');
  $(window).on('scroll', function() {
    scrollHeight = $(document).height();
    triggerHeight = pagetopTrigger.height();
    scrollPosition = window.innerHeight + $(window).scrollTop() + triggerHeight;
    footHeight = $('.l-footer').height();
    if ($(window).scrollTop() < 10) {
      pagetopTrigger.addClass('is-hide').removeClass('is-fixed').removeClass('is-absolute');
    } else if (scrollHeight - scrollPosition <= footHeight) {
      pagetopTrigger.addClass('is-absolute').removeClass('is-fixed').removeClass('is-hide');
    } else {
      pagetopTrigger.addClass('is-fixed').removeClass('is-hide').removeClass('is-absolute');
    }
  });
  pagetopTrigger.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
}


// anker
// ---------------------------------------------------
function anker() {
  const headerHeight = $('.l-header').outerHeight();
  $('.js-anker[href^="#"]').click(function() {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.position().top - headerHeight;
    $('html, body').animate({
      scrollTop: position
    }, 500);
    return false;
  });

  $('.js-anker').click(function() {
    let href = "#" + $(this).attr('href').split("#")[1];
    if ($(this).attr('href') == "/en/index.php#about-us" || $(this).attr('href') == "/index.php#about-us") {
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.position().top;
      $('html, body').animate({
        scrollTop: position
      }, 500);
      if ($(window).width() < 768) {
        $('.js-hamburger').removeClass('is-open');
        $('.js-menu').removeClass('is-open');
        $('body').removeClass('is-locked').css({ 'top': '' });
      }
      return false;
    }
  });
}


//animation
//---------------------------------------------------------
function scrollAnimation() {
  const animationTarget = $('.js-animate');
  $(window).on('load scroll', function() {
    animationTarget.each(function() {
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      let minus = $(window).width() > 768 ? 100 : 0;
      if (scroll > targetPos - windowHeight + minus) {
        $(this).addClass('is-animate');
      }
    });
  });
}

//animation
//---------------------------------------------------------
function scrollBg() {
  const animationTarget = $('.js-bg');
  $(window).on('load scroll', function() {
    animationTarget.each(function() {
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight) {
        if ((targetPos - scroll) <= windowHeight - (windowHeight * 0.65)) {
          $('body').removeClass('is-black');
          //animationTarget.parent().addClass('is-white');
        } else {
          //animationTarget.parent().removeClass('is-white');
        }
      } else {
        $('body').addClass('is-black');
      }
    });
  });
}


//scroll Header
//---------------------------------------------------------
function scrollHeader() {
  const animationTarget = $('.js-header');
  const headerHeight = $('.l-header').outerHeight();
  $(window).on('load scroll', function() {
    let scroll = $(window).scrollTop();
    let windowHeight = $(".top-mv__inner").height()
    if (scroll + headerHeight >= windowHeight) {
      animationTarget.addClass('is-fixed');
    } else {
      animationTarget.removeClass('is-fixed');
    }
  });
}

//check Top
//---------------------------------------------------------
function checkTop() {
  if (!$('.l-page').hasClass('top')) {
    $('.js-header').addClass('is-blend');
  }
}


//accordion
//---------------------------------------------------------
function accordion() {
  $('.js-accordion').on('click', function() {
    $(this).toggleClass('is-active').next().stop().slideToggle(300);
    return false;
  });
}


//init
//---------------------------------------------------------
$(function() {
  checkTop();
  userAgent();
  userAgentIE();
  spriteSvg();
  menu();
  dropNav();
  pagetop();
  anker();
  scrollAnimation();
  accordion();
  scrollBg();
  scrollHeader();

});

$(window).on('resize', function() {
  if ((typeof window.ontouchstart !== 'undefined') == true) {
    $('body').addClass('is-touch');
  } else {
    $('body').removeClass('is-touch');
  }
});