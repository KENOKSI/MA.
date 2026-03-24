const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
  
  },

  // Navigation arrows
  

  // And if we need scrollbar
  scrollbar: {
    hide:false,
  },
});
const prevBtn = document.querySelector('.custom-prev');
const nextBtn = document.querySelector('.custom-next');

prevBtn.addEventListener('click', () => {
    swiper.slidePrev();  
});

nextBtn.addEventListener('click', () => {
    swiper.slideNext();  
});