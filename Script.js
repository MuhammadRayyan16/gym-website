let menubar = document.querySelector('#menubar')
let navbar = document.querySelector('.navbar')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });




































// let menu = document.querySelector('#mbl');
// // let nav = document.querySelector('nav')

// // menu.onclick = () =>{
// //     menu.classList.toggle('fa-times')
// //     nav.classList.toggle('active')
// // }