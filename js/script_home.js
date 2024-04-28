var container = document.getElementById('slider-container');
var slider = document.getElementById('slider');
var slides = document.querySelectorAll('.slide');
var buttons = {
    left: document.getElementById('slider-btn-left'),
    right: document.getElementById('slider-btn-right')
};

var currentPosition = 0;
var slidesPerPage = 4; // Number of slides showing at a time
var containerWidth = container.offsetWidth;
var slidesCount = slides.length;
var currentMargin = 0;
var slideWidth = 100 / slidesPerPage;
var direction = 1; // 1 for forward, -1 for backward

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
};

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 2;
    } else if (w < 901) {
        slidesPerPage = 3;
    } else if (w < 1101) {
        slidesPerPage = 4;
    } else {
        slidesPerPage = 4; // Default for larger screens
    }

    slidesCount = slides.length;
    currentPosition = 0;
    currentMargin = 0;
    slider.style.marginLeft = currentMargin + '%';

    updateButtonState();
};

function slideRight() {
    if (currentPosition > 0) {
        currentPosition--;
        currentMargin += slideWidth;
        slider.style.marginLeft = currentMargin + '%';
        updateButtonState();
    }
}

function slideLeft() {
    if (currentPosition < slidesCount - slidesPerPage) {
        currentPosition++;
        currentMargin -= slideWidth;
        slider.style.marginLeft = currentMargin + '%';
        updateButtonState();
    }
}

function updateButtonState() {
    // Disable left button if all elements on the left are shown
    buttons.left.disabled = currentPosition <= 0;

    // Disable right button if all elements on the right are shown
    buttons.right.disabled = currentPosition >= slidesCount - slidesPerPage;
}

// Initialize slider
setParams();

// Attach event listeners to buttons
buttons.left.addEventListener('click', slideLeft);
buttons.right.addEventListener('click', slideRight);