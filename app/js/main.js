$(document).ready(function() {
  
  const sidebar = document.querySelector('.sidebar')
  const sidebarOpen = document.querySelector('.controls__link--tel')
  const sidebarClose = document.querySelector('.sidebar__btn')
  const overlay = document.querySelector('.body-overlay')
  const body = document.body


  sidebarOpen.addEventListener('click', e => {
    sidebar.classList.add('visible')
    overlay.classList.add('active')
    body.classList.add('scrollLock')
  })

  sidebarClose.addEventListener('click', e => {
    sidebar.classList.remove('visible')
    overlay.classList.remove('active')
    body.classList.remove('scrollLock')
  })

  overlay.addEventListener('click', e => {
    sidebar.classList.remove('visible')
    overlay.classList.remove('active')
    body.classList.remove('scrollLock')
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

  mixitup('.bestseller__items, .new-design__inner');

  $('.bestseller__items').mixItUp({
    selectors: {
      filter: '.filter__btn'
    }
  });

  $('.new-design__inner').mixItUp({
    selectors: {
      filter: '.filter__btn2'
    }
  });

})