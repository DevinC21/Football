// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const chevron = question.querySelector('.fas');
        
        question.addEventListener('click', () => {
            // Toggle the specific FAQ item
            item.classList.toggle('active');
            
            // Rotate chevron
            chevron.classList.toggle('fa-chevron-down');
            chevron.classList.toggle('fa-chevron-up');
        });
    });

    // Review Form Submission
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            // Basic client-side validation
            const name = document.getElementById('reviewer-name').value.trim();
            const rating = document.getElementById('reviewer-rating').value;
            const reviewContent = document.getElementById('review-content').value.trim();

            if (!name || !rating || !reviewContent) {
                e.preventDefault();
                alert('Please fill out all fields before submitting.');
            }
        });
    }

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const kitId = this.getAttribute('data-kit-id');
            
            // You would typically use AJAX or fetch to add to cart
            // For now, we'll just show an alert
            alert(`Kit ${kitId} added to cart!`);
        });
    });

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert(`Subscribed with email: ${email}`);
                emailInput.value = ''; // Clear input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});