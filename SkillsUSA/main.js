// Slide Show

let slideIndex = 0;
let slides = document.getElementsByClassName("slide-show__slide");
let dots = document.getElementsByClassName("dot-container__item");

function displaySlides() {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" item--active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " item--active";
  slideIndex++;

  setTimeout(displaySlides, 3000);
}

displaySlides();

// Content slider

let widgets = document.getElementsByClassName("content-slider__widget");
let currentTranslateX = 0;
let isSlideRightEnd = false;
let isSlideLeftEnd = false;
const threshold = 5;

function slideRight() {
  currentTranslateX += -75;

  if (currentTranslateX <= -225 + threshold) {
    currentTranslateX = -225; // Set to exact end position
    isSlideRightEnd = true;
  } else {
    isSlideRightEnd = false;
    for (let i = 0; i < widgets.length; i++) {
      widgets[i].style.transform = `translateX(${currentTranslateX}%)`;
    }
  }
}

function slideLeft() {
  currentTranslateX += 75;

  if (currentTranslateX >= 225 - threshold) {
    currentTranslateX = 225; // Set to exact end position
    isSlideLeftEnd = true;
  } else {
    isSlideLeftEnd = false;
    for (let i = 0; i < widgets.length; i++) {
      widgets[i].style.transform = `translateX(${currentTranslateX}%)`;
    }
  }
}

// Navigation

window.onload = () => {
  var buttons = document.getElementsByClassName("button-test__button");
  var button_text = document.getElementsByClassName("button-test__text");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      button_text[i].classList.toggle("--button-active");
    });
  }
};

var nav = document.getElementsByClassName("header__navigation");
var navOpenBtn = document.getElementById("openNavBtn");
var navCloseBtn = document.getElementById("closeNavBtn");
var navOpen = false;

function closeNav() {
  nav[0].style.top = "-100%";
  navOpenBtn.style.display = "block";
  navCloseBtn.style.display = "none";
  navOpen = false;
}

function openNav() {
  nav[0].style.top = "80px";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "block";
  navOpen = true;
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) {
    nav[0].style.top = "-100%";
    navCloseBtn.style.display = "none";
    navOpenBtn.style.display = "none";
    navOpen = false
  } else {
    if (navOpen) {
      navCloseBtn.style.display = "block";
      navOpenBtn.style.display = "none";
    } else {
      navCloseBtn.style.display = "none";
      navOpenBtn.style.display = "block";
    }
  }
});
