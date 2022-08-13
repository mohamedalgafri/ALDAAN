// const nav_mnue = document.querySelector(".menu_nav"),
//       nav_but = document.querySelector(".icon_menu"),
//       nav_close = document.querySelector(".close_menu"),
//       body = document.querySelector(".body");

// nav_but.addEventListener('click',()=>{
//   nav_mnue.classList.add("active");
//   nav_close.classList.add("active");
//   body.classList.add("active");
// })

// nav_close.addEventListener('click',()=>{
//   nav_mnue.classList.remove("active");
//   nav_close.classList.remove("active");
//   body.classList.remove("active");
// })

/////////////////////////////////////////

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });