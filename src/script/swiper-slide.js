var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // valor padrão (mobile)
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // ≥ 650px: mostra 2 slides
    650: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // ≥ 1000px: mostra 3 slides
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
