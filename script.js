document.addEventListener('DOMContentLoaded', function() {
    const startTestBtn = document.getElementById('startTestBtn');
    
    startTestBtn.addEventListener('click', function(e) {
        // Add click effect
        this.style.transform = 'scale(0.85)';
        
        // Simulate button press animation
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            // Redirect to test page
            window.location.href = '/test';
        }, 150);
    });
    
    // Reset transform on mouse up (in case user releases outside button)
    startTestBtn.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Reset transform on mouse leave
    startTestBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
