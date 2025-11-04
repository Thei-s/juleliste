// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWishList();
    initializeScrollAnimations();
});

// Initialize the wish list functionality
function initializeWishList() {
    console.log('Christmas Wish List Loaded!');
    
    // Add click effects to wish cards
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
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
