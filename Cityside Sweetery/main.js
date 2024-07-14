var overlay = document.getElementsByClassName("overlay");
var nav = document.getElementsByClassName("navigation");
var navItems = document.getElementsByClassName("nav_item");

// openNav = () => {
//   document.getElementById("nav").style.width = "200px";
//   overlay[0].className = overlay[0].className += " overlay_active";
// };

// closeNav = () => {
//   document.getElementById("nav").style.width = "0";
//   overlay[0].className = overlay[0].className.replace(" overlay_active", "");
// };

var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  
  slideIndex++;

  setTimeout(showSlides, 3000);
}
showSlides();