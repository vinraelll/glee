$(document).ready(function() {

  const additionalInfoBtns = document.querySelectorAll('.product-details__additional-btn')
  const additionalInfoBlock = document.querySelector('.product-details__additional-block')
  const additionalClasses = additionalInfoBtns.classList

  additionalInfoBtns.forEach((button) => {
    button.addEventListener('click', onButtonClick);
  });
// пропал. вне зоны
  function onButtonClick() {
    additionalInfoBtns.forEach((item) => {
      item.classList.remove('active');
    });
    this.classList.add('active');

    if (this.classList.contains('add-inf')) {
      // показать блок фdd inf
    } else if (this.classList.contains('desc')) {
      // показать блок desc
    } else {
      // показать rev
    }
  }

  // additionalInfoBtns.addEventListener('click', () => {
  //   console.log('click!')
  // })
  // 
  // additionalInfoBtns.classList.remove('active')

  $('.product-details__cards').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.product-details__slick-thumb').slick({
    asNavFor: '.product-details__slick-big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          vertical: false,
        }
      },
    ]
  })

  $('.product-details__slick-big').slick({
    asNavFor: '.product-details__slick-thumb',
    draggable: false,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  })

  $('.product-details__input').styler({})

  $('.rateyo-min').rateYo({
    starWidth: '12px',
    rating: 4,
    spacing: '8px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  $('.rateyo-lg').rateYo({
    starWidth: '20px',
    rating: 3.5,
    spacing: '10px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>' 
  });

  $('.rateyo-prod').rateYo({
    starWidth: '18px',
    rating: 4.5,
    spacing: '8px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

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

  // const addCart = document.querySelector('.products-list__cart')
  // const addVisible = document.querySelector('.products-list__btn--hidden')
  // const buttons = document.querySelectorAll('.products-list__btn')
  //   addCart.addEventListener('click', () => {
  //     buttons.forEach((buttons) => {
  //       buttons.classList.add('hidden-btn')
  //     })
  //     addVisible.classList.add('visible-btn')
  //   })

  
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