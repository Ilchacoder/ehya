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
