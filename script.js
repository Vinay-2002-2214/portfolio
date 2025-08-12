// JavaScript functionality for the portfolio

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission handler (basic example)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
}