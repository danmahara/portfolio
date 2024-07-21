document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Select all navigation links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each navigation link
    navLinks.forEach(function (navLink) {
        // Compare the current URL with the href attribute of the link
        if (navLink.href === currentUrl) {
            // Add 'active' class to the link
            navLink.classList.add('active');
        }
    });
});