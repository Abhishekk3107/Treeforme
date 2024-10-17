// Placeholder for any future functionality (such as animations, form validations, etc.)

// Add scroll-to functionality for buttons if required
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible Side Menu
const sideMenu = document.getElementById('sideMenu');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('collapsed');
});
