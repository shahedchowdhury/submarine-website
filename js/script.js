$(window).scroll(function () {
  let scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $("header").addClass("darkHeader");
  } else {
    $("header").removeClass("darkHeader");
  }
});




const swiper = new Swiper(".swiperSliderOne", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const swiperThree = new Swiper(".swiperSliderTwo", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const swiperOne = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiperTwo = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperOne,
  },
});


const swiper4 = new Swiper(".mySwiper4", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// const menuBtn = document.getElementById("hamburger");
// const menu = document.getElementById("menu");

// menuBtn.addEventListener("click", ()=> {
//     menu.style.left = '0'
// });