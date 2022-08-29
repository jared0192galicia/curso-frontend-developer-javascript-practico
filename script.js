const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
let active = false;
const buttonMobileMenu = document.querySelector(".menu");
const mobileMenu = document.getElementById("menuMobile");

function run(){
    navEmail.onclick = switchDesktopMenu;
    buttonMobileMenu.onclick = switchMobileMenu;
}
/**
 * When the user clicks on the hamburger menu, toggle the inactive class on the desktop menu.
 */
function switchDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
/**
 * `if (active) { mobileMenu.classList.toggle('none'); } else { mobileMenu.style.display = 'block' }`
 * 
 * The `if` statement is checking to see if the `active` variable is true. If it is, then it's going to
 * toggle the `none` class on the `mobileMenu` element. If it's not, then it's going to set the
 * `display` property of the `mobileMenu` element to `block`
 */
function switchMobileMenu(){
    console.log("🚀 ~ file: script.js ~ line 6 ~ mobileMenu", mobileMenu);
    // mobileMenu.classList.toggle('inactive');
    if (active) {
        mobileMenu.classList.toggle('none');
    } else {
        mobileMenu.style.display = 'block'
    }
}

run();