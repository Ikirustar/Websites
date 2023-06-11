// navigation

var navOpen = false;
var overlay = document.getElementsByClassName("overlay")

function openNav() {
    document.getElementById("nav").style.width = "200px";
    overlay[0].className += " overlay_active"
    navOpen = true;
    
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    overlay[0].className = overlay[0].className.replace(" overlay_active", "")
    navOpen = false
}

window.addEventListener('resize', function () {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 1000) {
        if (navOpen == false) {
            closeNav();
        }
    } else {
        document.getElementById("nav").style.width = "500px";
        overlay[0].className = overlay[0].className.replace(" overlay_active", "")
        navOpen = false;
    }
});