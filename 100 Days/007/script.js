const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const menuIcon = document.querySelector(".menu-icon");
const panel = document.querySelector(".panel");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  panel.classList.toggle("show-menu");
});

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});
