const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});