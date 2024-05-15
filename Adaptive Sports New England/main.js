var nav = document.getElementById("nav");

openNav = () => {
  nav.style.width = "200px";
};

closeNav = () => {
  nav.style.width = "0";
};

var slides = document.getElementsByClassName("slide");
var slideIndex = 0;

showSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = "block";
  slideIndex++;

  setTimeout(showSlides, 3000);
};

showSlides();
