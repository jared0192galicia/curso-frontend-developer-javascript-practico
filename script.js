const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
let active = false;
const buttonMobileMenu = document.querySelector("#img");
const mobileMenu = document.getElementsByClassName("mobile-menu");

function run(){
    
    console.log("🚀 ~ file: script.js ~ line 6 ~ mobileMenu", mobileMenu);
    buttonMobileMenu.onclick = switchMobileMenu;
    navEmail.onclick = switchDesktopMenu;
    // mobileMenu.onclick = sllep;
}
/**
 * When the user clicks on the hamburger menu, toggle the inactive class on the desktop menu.
 */
function switchDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function switchMobileMenu(){
    mobileMenu.style.display = "none";
    //mobileMenu.classList.toggle("inactive");
}
function sllep(){
    mobileMenu.classList.toggle("dis");
}

run();