// Scroll to a specific position near the bottom of the page on load
window.onload = function () {
    var targetPosition = document.body.scrollHeight; // Adjust the value to position the header
    window.scrollTo(0, targetPosition);
};