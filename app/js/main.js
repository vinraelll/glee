$(document).ready(function() {

  $('.slider').slick({
    arrows: false,
    dots: true,
  })

  $('.partners').slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  const mixer = mixitup('.bestseller__items, .new-design__inner');

})