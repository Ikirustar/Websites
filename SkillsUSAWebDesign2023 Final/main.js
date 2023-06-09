var overlay = document.getElementsByClassName("overlay")

function openNav() {
  document.getElementById("nav").style.width = "200px";
  overlay[0].className += " overlay-active"
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
  overlay[0].className = overlay[0].className.replace(" overlay-active", "")
}

var slideIndex = 0;
var slides = document.getElementsByClassName("slides_image");

showSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = "block";
  slideIndex++;

  setTimeout(showSlides, 3000);
};

showSlides();

