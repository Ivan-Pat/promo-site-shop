
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
  










//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1cmdlci1idXR0b25cIilcclxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1cmdlclwiKVxyXG4gIFxyXG4gIGJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+IHtcclxuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtYnVyZ2VyX2FjdGl2ZVwiKVxyXG4gICAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItYnV0dG9uX2FjdGl2ZVwiKVxyXG5cclxuICB9IClcclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5jb25zdCBtZW51Q2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbi1jYXRhbG9nXCIpO1xyXG5jb25zdCBjYXRhbG9nSGVhZGVyQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tY2F0YWxvZ1wiKVxyXG5cclxuY2F0YWxvZ0hlYWRlckJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XHJcbiAgbWVudUNhdGFsb2cuY2xhc3NMaXN0LnRvZ2dsZShcImNhdGFsb2dfYWN0aXZlXCIpICAgIFxyXG59KSBcclxuXHJcbm1lbnVDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0NhdGFsb2cpXHJcblxyXG5mdW5jdGlvbiBjbGlja0NhdGFsb2coZXZlbnQpIHtcclxuICBsZXQgY2xpY2tCdXR0b24gPSBldmVudC50YXJnZXQgXHJcbiAgaWYgKGNsaWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNhdGFsb2ctbWVudS1idXR0b25cIikpIHtcclxuICAgIGNsaWNrQnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY2F0YWxvZy1tZW51X2FjdGl2ZVwiKVxyXG4gIH1cclxuICAgIFxyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
