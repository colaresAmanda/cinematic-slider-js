var swiper = new Swiper('.swiper', {
  mousewheel: true,
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})

document.querySelectorAll('.custom-next-button').forEach((button) => {
  button.addEventListener('click', () => {
    swiper.slideNext()
  })
})
