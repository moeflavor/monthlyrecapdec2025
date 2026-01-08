// Page navigation functions
function goToPage2() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    page1.classList.remove('active');
    page2.classList.add('active');

    // Scroll to top when changing pages
    window.scrollTo(0, 0);
}

function goToPage1() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    page2.classList.remove('active');
    page1.classList.add('active');

    // Scroll to top when changing pages
    window.scrollTo(0, 0);
}

// Prevent scrolling issues on mobile
document.addEventListener('DOMContentLoaded', function() {
    // Set initial viewport height for mobile browsers
    const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
});

// Optional: Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const page1Active = document.getElementById('page1').classList.contains('active');

    if (e.key === 'ArrowRight' && page1Active) {
        goToPage2();
    } else if (e.key === 'ArrowLeft' && !page1Active) {
        goToPage1();
    }
});
