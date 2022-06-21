
/*==================================================================*/
const burgerButton = document.querySelector(".menu-burger-button-wrapper");
const burgerMenu = document.querySelector(".menu-burger");
const menuCatalog = document.querySelector(".section-catalog");


const bodyDOM = document.querySelector('body').addEventListener('click', mouseClick);

 
function mouseClick(event) {

    let clickEvent = event.target;

    if (clickEvent.classList.contains('menu-burger-button')) clickBurgerMenu();
    if (clickEvent.classList.contains('button-catalog')) clickButtonCatalog();
    if (clickEvent.classList.contains('catalog-menu-button')) clickSubMenuCatalog(clickEvent);
 }


function clickBurgerMenu() {
  burgerMenu.classList.toggle("menu-burger_active");
  burgerButton.firstElementChild.classList.toggle("burger-button_active");
  document.body.classList.toggle("fixed")
};
function clickButtonCatalog() {
  menuCatalog.classList.toggle("catalog_active");
  
}
function clickSubMenuCatalog(clickEvent) {
  clickEvent.nextElementSibling.classList.toggle("catalog-menu_active");
}
//====================================================================
















/*==================================================================*/
  
import Swiper, { Navigation, Pagination } from '../../Gulp/node_modules/swiper/swiper-bundle.esm.js';

const swiper = new Swiper('.swiper-veget', {
  navigation: {
    nextEl: '.swiper-but-veget-r',
    prevEl: '.swiper-but-veget-l',

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 10,
  loop: false,
  grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        //slidesPerGroup: 1,
        watchOverflow: false, 

      },
      760: {
        slidesPerView: 2,
        //slidesPerGroup: 1,
        watchOverflow: false, 
      }, 
      1024: {
        slidesPerView: 3,
      },
      1440: {
        //loopedSlides: 9,
        slidesPerView: 4,
        watchOverflow: false,

        //slidesPerGroup: 1,
        //slidesPerColumn: 2,
        autoHeight: false,
      }
    },
  
    
 
}) 
const swiperFruit = new Swiper('.swiper-fruit', {
  navigation: {
    nextEl: '.swiper-but-fruit-r', 
    prevEl: '.swiper-but-fruit-l',

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 10,
  loop: false,
  grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        //slidesPerGroup: 1,
        watchOverflow: false, 

      },
      760: {
        slidesPerView: 2,
        //slidesPerGroup: 1,
        watchOverflow: false, 
      }, 
      1024: {
        slidesPerView: 3,
      },
      1440: {
        //loopedSlides: 9,
        slidesPerView: 4,
        watchOverflow: false,

        //slidesPerGroup: 1,
        //slidesPerColumn: 2,
        autoHeight: false,
      }
    },
}) 
const swiperFeedback = new Swiper('.swiper-feedback', {
  navigation: {
    nextEl: '.swiper-but-feedback-r', 
    prevEl: '.swiper-but-feedback-l',

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 10,
  loop: false,
  grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        //slidesPerGroup: 1,
        watchOverflow: false, 

      },
      1024: {
        slidesPerView: 2,
      },
      1440: {
        //loopedSlides: 9,
        slidesPerView: 3,
        watchOverflow: false,

        //slidesPerGroup: 1,
        //slidesPerColumn: 2,
        autoHeight: false,
      }
    },
}) 







