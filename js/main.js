var mySwiper = new Swiper(".reviews-container", {
  loop: true,
  autoplay: {
    delay: 7000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  effect: "coverflow",
  speed: 800,
  spaceBetween: 40,
});

var mySwiper_1 = new Swiper(".story-container", {
  loop: true,
  navigation: {
    nextEl: ".story-swiper__button--next",
    prevEl: ".story-swiper__button--prev",
  },
  breakpoints: {
    756: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    220: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      slidesPerGroup: 1,
    },
  },

  spaceBetween: 28,
  speed: 800,
});
