var menuIconCart = document.getElementsByClassName("menu-iconCart");
var desktopMenu = document.getElementsByClassName("desktop-menu");

console.log(desktopMenu);

menuIconCart[0].addEventListener("click", toggleDesktopMenu);
var MenuIsVisible = false;

function toggleDesktopMenu() {
  if (!MenuIsVisible) {
    desktopMenu[0].style.display = "flex";
} else {
    desktopMenu[0].style.display = "none";
}

console.log(desktopMenu[0])
MenuIsVisible = !MenuIsVisible
}
