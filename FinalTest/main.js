const nav = document.getElementById("main-nav");
const navToggleBtn = document.getElementById("nav-toggle-btn");
let isOpen = false; // Track menu state

navToggleBtn.addEventListener("click", () => {
  if (!isOpen) {
    nav.classList.add("open"); // Add a CSS class for styling the open state
    isOpen = true;
  } else {
    nav.classList.remove("open");
    isOpen = false;
  }
});
