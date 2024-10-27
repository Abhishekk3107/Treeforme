// Smooth scroll for anchor links
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

// Toggle the sidebar when the menu toggle button is clicked
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    sideMenu.classList.toggle('collapsed');
});

// Collapse the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    // Only collapse if the menu is open and the click is outside the menu and the toggle button
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target) && !sideMenu.classList.contains('collapsed')) {
        sideMenu.classList.add('collapsed');
    }
});
