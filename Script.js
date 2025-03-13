// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const spans = this.querySelectorAll('span');
            
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if current item is active
            const isActive = item.classList.contains('active');
            
            // Close all FAQs
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-question').classList.remove('active');
            });
            
            // If current item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                question.classList.add('active');
            }
        });
    });
    
    // Reviews Slider
    const reviewDots = document.querySelectorAll('.review-dot');
    const reviewSlides = document.querySelectorAll('.review-slide');
    const reviewContainer = document.querySelector('.reviews-container');
    let currentReviewIndex = 0;
    
    // Function to show a specific review
    function showReview(index) {
        // Hide all reviews
        reviewSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        reviewDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected review and activate its dot
        reviewSlides[index].classList.add('active');
        reviewDots[index].classList.add('active');
        currentReviewIndex = index;
    }
    
    // Add click event to dots
    reviewDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showReview(index);
        });
    });
    
    // Auto-rotate reviews every 5 seconds
    let reviewInterval = setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % reviewSlides.length;
        showReview(currentReviewIndex);
    }, 5000);
    
    // Pause auto-rotation when hovering over reviews
    if (reviewContainer) {
        reviewContainer.addEventListener('mouseenter', () => {
            clearInterval(reviewInterval);
        });
        
        reviewContainer.addEventListener('mouseleave', () => {
            reviewInterval = setInterval(() => {
                currentReviewIndex = (currentReviewIndex + 1) % reviewSlides.length;
                showReview(currentReviewIndex);
            }, 5000);
        });
    }
    
    // Initialize the first review
    showReview(0);
    
    // Add swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (reviewContainer) {
        reviewContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        reviewContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next review
            currentReviewIndex = (currentReviewIndex + 1) % reviewSlides.length;
            showReview(currentReviewIndex);
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous review
            currentReviewIndex = (currentReviewIndex - 1 + reviewSlides.length) % reviewSlides.length;
            showReview(currentReviewIndex);
        }
    }
});