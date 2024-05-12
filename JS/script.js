const navBar = document.getElementsByClassName("navbar")[0];
const navLinks = document.querySelectorAll(".nav-link");
const brand = document.querySelector(".navbar-brand");
const menu = document.querySelector(".burger-icon");

window.addEventListener("scroll", function () {
  if (window.scrollY > 680) {
    navBar.classList.add("nav-scrolled");
    navLinks.forEach((link) => {
      link.classList.add("color-scrolled");
      link.style.setProperty("--scroll", "black");
    });
    brand.classList.add("color-scrolled");
    menu.classList.add("color-scrolled");
  } else {
    navBar.classList.remove("nav-scrolled");
    navLinks.forEach((link) => {
      link.classList.remove("color-scrolled");
      link.style.removeProperty("--scroll");
    });
    brand.classList.remove("color-scrolled");
    menu.classList.remove("color-scrolled");
  }
});

var typed = new Typed(".auto-type", {
  strings: ["Larry Danials", "Developer", "Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
