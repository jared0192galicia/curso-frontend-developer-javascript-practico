const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
let active = false;
const buttonMobileMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

function run(){
    
    console.log("🚀 ~ file: script.js ~ line 6 ~ mobileMenu", mobileMenu);
    buttonMobileMenu.onclick = switchMobileMenu;
    navEmail.onclick = switchDesktopMenu;
}
/**
 * When the user clicks on the hamburger menu, toggle the inactive class on the desktop menu.
 */
function switchDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function switchMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}

run();