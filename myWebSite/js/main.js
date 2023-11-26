let mobileMenu = document.querySelector("#menu");
let navigationRight = document.querySelector(".navigation__right");
let navigationMobile = document.querySelector(".navigation__mobile");

mobileMenu.addEventListener("click", () => {
  if (navigationRight.classList.contains("active")) {
    navigationRight.classList.remove("active");
  } else {
    navigationRight.classList.add("active");
  }
});
