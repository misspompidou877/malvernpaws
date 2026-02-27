// ========================================
// MALVERN PAWS - INTERACTIVE FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // Smooth scroll for anchor links
    // ========================================
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // Form submission handling
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // The form will submit to Formspree via the action attribute
            // This handler is included for any custom processing if needed in future
            console.log('Contact form submitted');
        });
    }

    // ========================================
    // Mobile menu toggle (future enhancement)
    // ========================================
    // If you add a hamburger menu for mobile in the future, add toggle logic here

    // ========================================
    // Scroll animations (optional enhancement)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Optional: Add fade-in animations to elements as they scroll into view
    // const elementsToAnimate = document.querySelectorAll('.service-card, .gallery-item, .pricing-card');
    // elementsToAnimate.forEach(el => {
    //     el.style.opacity = '0';
    //     el.style.transform = 'translateY(20px)';
    //     el.style.transition = 'opacity 0.6s, transform 0.6s';
    //     observer.observe(el);
    // });
});
