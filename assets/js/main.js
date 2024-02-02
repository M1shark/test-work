const menu = document.querySelector(".header__nav");
const burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  menu.classList.toggle("menu__active");
  if (menu.classList.contains("menu__active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
