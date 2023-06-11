// navigation

var navOpen = false;

function openNav() {
    document.getElementById("nav").style.width = "200px";
    navOpen = true;
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
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
        navOpen = false;
    }
});