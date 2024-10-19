//  FUNCTION TOGGLE MENU //

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// FUNCTION OPEN LINK IN NEW TAB //

function openLink(url) {
    window.open(url, '_blank');
}

// GET CURRENT YEAR //
document.getElementById('current-year').textContent = new Date().getFullYear();

