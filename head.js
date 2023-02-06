let logo = document.querySelector('.navbar-logo');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    var selectedSections = document.querySelectorAll('.selected-section');
    var navbar = document.getElementById("navbar");

    var isSelectedSection = false;
    selectedSections.forEach(section => {
        if (section.offsetTop <= window.scrollY + navbar.offsetHeight && section.offsetTop + section.offsetHeight > window.scrollY + navbar.offsetHeight) {
            isSelectedSection = true;
        }
    });

    if (isSelectedSection) {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = '#222';
    }
}