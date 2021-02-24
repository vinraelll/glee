$(document).ready(function() {

  // $("#rateYo").rateYo({
  //   starWidth: "40px"
  // });

  $('.price-slider').ionRangeSlider({
    type: "double",
    min: 0.01,
    max: 1000.01,
    from: 200.18,
    to: 500.65,
    step: 0.01,

    onStart: function (data) {
      $('.price-slider__from').text(data.from);
      $('.price-slider__to').text(data.to);
    },

    onChange: function (data) {
      $('.price-slider__from').text(data.from);
      $('.price-slider__to').text(data.to);
    }
  });

  // document.querySelector('.products-filter__brand').addEventListener('click', () => {
  //   console.log('.products-filter__brand')
  //   document.querySelector('.products-filter__count').classList.toggle('blue-color');

  // const filterCheck = document.getElementsByClassName('products-filter__brand')
  //   console.log(filterCheck)
  // const filterColor = document.querySelector('.products-filter__count')

  // const colorToggle = () => {
  //   filterColor.classList.toggle('blue-color')
  // }

  // filterCheck.addEventListener('click', colorToggle)

  
  const sidebar = document.querySelector('.sidebar')
  const sidebarOpen = document.querySelector('.controls__link--tel')
  const sidebarClose = document.querySelector('.sidebar__btn')
  const overlay = document.querySelector('.body-overlay')
  const body = document.body

  const sidebarToggle = () => {
    sidebar.classList.toggle('visible')
    overlay.classList.toggle('active')
    body.classList.toggle('scrollLock')
  }

  sidebarOpen.addEventListener('click', sidebarToggle)
  sidebarClose.addEventListener('click', sidebarToggle)
  overlay.addEventListener('click', sidebarToggle)

  $('.slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 3000,
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

  const mixerBestseller = mixitup('.bestseller__items', {
    selectors: {
      control: '.filter__bestseller'
    }
  });

  const mixerDesign = mixitup('.new-design__inner', {
    selectors: {
      control: '.filter__design'
    }
  });
})