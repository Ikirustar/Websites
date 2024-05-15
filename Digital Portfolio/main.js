// navigation

var navOpen = false;
var overlay = document.getElementsByClassName("overlay")

function openNav() {
    document.getElementById("nav").style.width = "200px";
    overlay[0].className += " overlay_active"
    
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    overlay[0].className = overlay[0].className.replace(" overlay_active", "")
}

window.addEventListener('resize', function(){
    windowWidth = window.inner.width();

    if (windowWidth >= 1000) {
        document.getElementById("nav").style.width = "700px";
        overlay[0].className = overlay[0].className.replace(" overlay_active", "")
    }
})