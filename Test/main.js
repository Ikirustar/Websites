var slideIndex = 0;
var slides = document.getElementsByClassName("slides")
var dots = document.getElementsByClassName("dot")


showSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";    
  }

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  dots[slideIndex].className += " active";
  slides[slideIndex].style.display = "block";
  slideIndex++

  setTimeout(showSlides, 3000)
}

showSlides();