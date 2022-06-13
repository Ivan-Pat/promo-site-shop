
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
  










//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1cmdlci1idXR0b25cIilcclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1cmdlclwiKVxyXG4gIFxyXG4gIGJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+IHtcclxuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtYnVyZ2VyX2FjdGl2ZVwiKVxyXG4gICAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItYnV0dG9uX2FjdGl2ZVwiKVxyXG5cclxuICB9IClcclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5jb25zdCBtZW51Q2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbi1jYXRhbG9nXCIpO1xyXG5jb25zdCBjYXRhbG9nSGVhZGVyQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tY2F0YWxvZ1wiKVxyXG5cclxuY2F0YWxvZ0hlYWRlckJ1dCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcclxuICBtZW51Q2F0YWxvZy5jbGFzc0xpc3QudG9nZ2xlKFwiY2F0YWxvZ19hY3RpdmVcIikgICAgXHJcbn0pIFxyXG5cclxubWVudUNhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQ2F0YWxvZylcclxuXHJcbmZ1bmN0aW9uIGNsaWNrQ2F0YWxvZyhldmVudCkge1xyXG4gIGxldCBjbGlja0J1dHRvbiA9IGV2ZW50LnRhcmdldCBcclxuICBpZiAoY2xpY2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2F0YWxvZy1tZW51LWJ1dHRvblwiKSkge1xyXG4gICAgY2xpY2tCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJjYXRhbG9nLW1lbnVfYWN0aXZlXCIpXHJcbiAgfVxyXG4gICAgXHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
