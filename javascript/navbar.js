const siteName = "Here Tis";

document.getElementById("top__nav__logo").innerText = siteName;

// dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownContainer = document.querySelector(".dropdown-container");

  hamburgerMenu.addEventListener("click", function () {
    console.log("clicked: Hamburger");
    if (dropdownMenu.style.display === "flex") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "flex";
    }
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !dropdownContainer.contains(event.target) &&
      dropdownMenu.style.display === "flex"
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
