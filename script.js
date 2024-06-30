document.querySelectorAll('.btn-neon').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});
// Function to check if the bottom of the page is reached
function isBottomOfPage() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to handle scroll event
function handleScroll() {
    if (isBottomOfPage()) {
        // Reset the scroll position to the top
        window.scrollTo(0, 0);
    }
}

// Add scroll event listener to the body
document.body.addEventListener('scroll', handleScroll);

// Add scroll event listener to body
document.body.addEventListener('scroll', function() {
    // Add 'scrolling' class to body when scrolling
    document.body.classList.add('scrolling');

    // Clear timeout to prevent flashing effect
    clearTimeout(this.scrollTimeout);
    
    // Set timeout to remove 'scrolling' class after 300ms
    this.scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
    }, 300);
});

