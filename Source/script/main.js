
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

catalogHeaderBut = document.addEventListener("click", ()=> {
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
  










