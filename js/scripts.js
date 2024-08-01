document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: 'smooth'
        });
    }

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-element');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Responsive navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
    });

    // Form validation
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
        const email = contactForm.querySelector('input[name="_replyto"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        if (!email || !message) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });
});


