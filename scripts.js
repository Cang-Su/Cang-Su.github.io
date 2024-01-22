// Simple example JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // DOM is ready, you can interact with it here
    console.log('DOM is ready.');

    // Example: Change the color of the header on click
    var header = document.querySelector('header');
    header.addEventListener('click', function () {
        header.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
