/* Scroll To Top Button */
const scrollButton = document.getElementById('scroll-to-top');

// Button einblenden, wenn nach unten gescrollt
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

// Beim Klicken smooth nach oben scrollen
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
});

/* Navigation Bar */
const hamburger = document.getElementById('hamburger-menu');
document.querySelectorAll('.navigation-list li a')
    .forEach(link => {
        link.addEventListener('click', () => {
            hamburger.checked = false; // close the menu
        });
    });