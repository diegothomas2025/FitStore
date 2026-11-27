const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');

menuToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
}); 