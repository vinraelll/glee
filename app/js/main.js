$(document).ready(function() {
  
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