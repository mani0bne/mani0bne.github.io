function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth scrolling behavior
    });
}

// Add an event listener to the "Scroll to Top" button
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    scrollToTopButton.addEventListener("click", scrollToTop);
});