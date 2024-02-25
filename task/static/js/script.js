document.addEventListener("DOMContentLoaded", init);

function init() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const originalTitle = document.title;


    function handleNavClick(event) {
        console.log('Hizo click')
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        event.target.classList.add('active');
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavClick);
    });

    function changeTitle() {
        document.title = "Come back 🥹";
    }

    function restoreTitle() {
        document.title = originalTitle;
    }

    window.addEventListener('blur', changeTitle);

    window.addEventListener('focus', restoreTitle);
}
