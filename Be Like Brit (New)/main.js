//navigation
var overlay = document.getElementsByClassName("overlay")

openNav = () => {
  document.getElementById("nav").style.width ="200px"
  overlay[0].className += " overlay-active";
}

closeNav = () => {
  document.getElementById("nav").style.width ="0"
  overlay[0].className = overlay[0].className.replace(" overlay-active", "")
}

