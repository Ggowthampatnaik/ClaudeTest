// Sticky CTA Toggle
const stickyCTA = document.getElementById('stickyCTA');
const heroSection = document.querySelector('.hero');

function toggleStickyCTA() {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
        stickyCTA.classList.add('visible');
    } else {
        stickyCTA.classList.remove('visible');
    }
}

// Scroll Reveals the 
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Event Listeners
window.addEventListener('scroll', () => {
    toggleStickyCTA();
    revealOnScroll();
});

// Initial check
toggleStickyCTA();
revealOnScroll();
