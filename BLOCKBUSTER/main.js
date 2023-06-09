// navigation

function openNav() {
  document.getElementById("nav").style.width = "200px";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
}

// slideshow

var slides = document.getElementsByClassName("slides");
var slideIndex = 0;

showSlides();

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex >= slides.length - 1) {slideIndex = 0}

    slides[slideIndex].style.display = "block"
    slideIndex++;

    setTimeout(showSlides, 3000);
}
