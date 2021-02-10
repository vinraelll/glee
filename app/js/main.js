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
  })

  const mixer = mixitup('.bestseller__items, .new-design__inner');

})