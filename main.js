// Documentation for additional options and configurations: https://swiperjs.com/demos

var swiper = new Swiper('.swiper', {
  // Enable scrolling with mouse wheel
  mousewheel: true,

  // Enable lazy loading for images, improving performance
  lazy: true,

  // Configure pagination settings
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})
