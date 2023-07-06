// Scroll to a specific position near the bottom of the page on load
window.onload = function () {
    var targetPosition = document.body.scrollHeight; // Adjust the value to position the header
    window.scrollTo(0, targetPosition);
};

// var minScrollPosition = 500; // Define the minimum scroll position from the top

// window.addEventListener('scroll', function (event) {
//     if (window.scrollY < minScrollPosition) {
//         event.preventDefault();
//         window.scrollTo(0, minScrollPosition);
//     }
// });
