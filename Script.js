// Add this script at the end of your HTML body
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Optional: Toggle menu icon (requires Font Awesome or similar)
        // If using Font Awesome, you can add:
        // this.innerHTML = navMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!event.target.closest('header') && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
      
      // Close menu when window is resized to desktop size
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    }
  });

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

    const reviewForm = document.getElementById('review-form');
    const reviewsSection = document.getElementById('reviews-section');
    
    if (reviewForm && reviewsSection) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            
            // Basic client-side validation
            const name = document.getElementById('reviewer-name').value.trim();
            const rating = document.getElementById('reviewer-rating').value;
            const reviewContent = document.getElementById('review-content').value.trim();
    
            if (!name || !rating || !reviewContent) {
                alert('Please fill out all fields before submitting.');
                return; // Prevent submission if validation fails
            }
    
            // Create a new review object
            const newReview = {
                name: name,
                rating: rating,
                content: reviewContent
            };
    
            // Create a new review element to display on the page
            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review');
    
            const reviewHTML = `
                <h3>${newReview.name}</h3>
                <p>Rating: ${newReview.rating}</p>
                <p>${newReview.content}</p>
            `;
    
            reviewContainer.innerHTML = reviewHTML;
    
            // Append the new review to the reviews section on the page
            reviewsSection.prepend(reviewContainer); // Prepend the new review to the top
    
            // Optionally, reset the form fields after submission
            reviewForm.reset();
        });
    } else {
        console.error('Review form or reviews section not found.');
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
