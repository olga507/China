$(document).ready(function(){
    $('.reviews__inner').slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              }
          },
        ]
      });
});

