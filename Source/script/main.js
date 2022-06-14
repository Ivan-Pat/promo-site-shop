
/*==================================================================*/
  const burgerButton = document.querySelector(".menu-burger-button")
  const burgerMenu = document.querySelector(".menu-burger")
  
  burgerButton.addEventListener("click",()=> {
    burgerMenu.classList.toggle("menu-burger_active")
    burgerButton.classList.toggle("burger-button_active")

  } )
/*==================================================================*/
const menuCatalog = document.querySelector(".section-catalog");
const catalogHeaderBut = document.querySelector(".button-catalog")

catalogHeaderBut.addEventListener("click", ()=> {
  menuCatalog.classList.toggle("catalog_active")    
}) 

menuCatalog.addEventListener("click", clickCatalog)

function clickCatalog(event) {
  let clickButton = event.target 
  if (clickButton.classList.contains("catalog-menu-button")) {
    clickButton.nextElementSibling.classList.toggle("catalog-menu_active")
  }
    
}
/*==================================================================*/
  
import Swiper, { Navigation, Pagination } from '../../Gulp/node_modules/swiper/swiper-bundle.esm.js';

const swiper = new Swiper('.swiper-home-veget', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

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
      768: {
        slidesPerView: 2,
        //slidesPerGroup: 1,
        watchOverflow: false, 
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







