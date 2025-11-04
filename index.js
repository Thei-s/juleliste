// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWishList();
    initializeScrollAnimations();
});

// Initialize the wish list functionality
function initializeWishList() {
    console.log('Christmas Wish List Loaded!');
    
    // Click effects removed - cards maintain their position and size when clicked
}

// Initialize scroll-based animations
function initializeScrollAnimations() {
    // Performance optimization: Intersection Observer for animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element is entering viewport - show it
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                } else {
                    // Element is leaving viewport - hide it for next time
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                }
            });
        }, { threshold: 0.1 });
        
        // Observe all wish cards
        document.querySelectorAll('.wish-card').forEach(card => {
            observer.observe(card);
        });
    }
}
