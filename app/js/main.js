$(document).ready(function() {
  
  const sidebar = document.querySelector('.sidebar')
  const sidebarBody = document.querySelector('.sidebar__body')
  const sidebarMenu = document.querySelector('.sidebar__menu')
  const sidebarOpen = document.querySelector('.controls__link--tel')
  const sidebarClose = document.querySelector('.sidebar__btn')
  const overlay = document.querySelector('.body-overlay')

  sidebarOpen.addEventListener('click', e => {
    sidebar.classList.add('visible')
    overlay.classList.add('active')
  })

  sidebarClose.addEventListener('click', e => {
    sidebar.classList.remove('visible')
    overlay.classList.remove('active')
  })

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

  const mixer = mixitup('.bestseller__items, .new-design__inner');

})