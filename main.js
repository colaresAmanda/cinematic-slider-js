var swiper = new Swiper('.swiper', {
    mousewheel: true,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });
  
  document.querySelector('.custom-next-button').addEventListener('click', () => {
    swiper.slideNext();
  });
  