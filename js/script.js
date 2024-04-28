// Toggles between mobile navigation links when hamburger menu is clicked

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('change');
        mobileNavLinks.classList.toggle('active');
    });
});