const btnHamburger = document.querySelector(".btnHamburger");
const headerMenuMobile = document.querySelector(".header-menu-mobile");
const menuUserCardContainer = document.querySelector("#menuUserCardContainer");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
  }

  if (headerMenuMobile.style.display == "block") {
    headerMenuMobile.style.display = "none";
  } else {
    headerMenuMobile.style.display = "block";
  }
});
