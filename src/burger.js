const button = document.querySelector(".hamburger__menu");
const navMenu = document.querySelector(".hamburger__menu__active");
let buttonActive = false;
button.addEventListener("click", () => {

  if (!buttonActive){
    button.classList.add("open");
    navMenu.classList.add("open");
    buttonActive = true;
  } else {
    button.classList.remove("open");
    navMenu.classList.remove("open");
    buttonActive = false;
  }

});