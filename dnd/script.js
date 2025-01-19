// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL
    const currentPath = window.location.pathname;

    // Get all navigation links
    const navLinks = document.querySelectorAll('.navlist .nav-item a');

    // Loop through each link
    navLinks.forEach(link => {
        // Extract just the filename from the href
        const linkPath = link.getAttribute('href');
        // Check if the link's href matches the current page
        if (currentPath.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        }
    });
});
