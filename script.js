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

// EmailJS Contact form submission handler
(function() {
  // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
  emailjs.init('hXZbkWH1gg3REXhEa');
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Your Service ID is set as 'service_29656ff'
    // Replace 'YOUR_TEMPLATE_ID' with your EmailJS Template ID
    emailjs.sendForm('service_29656ff', 'template_9llb6lv', this)
        .then(function() {
            document.getElementById('formSuccess').style.display = 'block';
        }, function(error) {
            alert('Failed to send message: ' + error.text);
        });
    this.reset();
});




