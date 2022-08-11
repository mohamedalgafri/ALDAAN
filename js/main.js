
const nav_mnue = document.querySelector(".menu_nav"),
      nav_but = document.querySelector(".icon_menu"),
      nav_close = document.querySelector(".close_menu"),
      body = document.querySelector(".body");

nav_but.addEventListener('click',()=>{
  nav_mnue.classList.add("active");
  nav_close.classList.add("active");
  body.classList.add("active");
})

nav_close.addEventListener('click',()=>{
  nav_mnue.classList.remove("active");
  nav_close.classList.remove("active");
  body.classList.remove("active");
})


///////////////////////////////////////////////

var swiper = new Swiper(".mySwiper1", {
  direction: "vertical",
  loop: true,
  simulateTouch:false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//////////////////////////// mySwiper2 /////////////////////

// var swiper = new Swiper(".mySwiper2", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop:true,
//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 0,
//     },
//   },
// });