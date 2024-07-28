// Select all slide elements
const slides = document.querySelectorAll(".slide");

// Initialize counter variable to track the current slide index
let counter = 0;

// Set initial positions of slides using left positioning
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Use backticks (`) for template literals
});

// Function to move to the previous slide
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Loop back to the last slide if at the beginning
    }
    slideImage();
};

// Function to move to the next slide
const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Loop back to the first slide if at the end
    }
    slideImage();
};

// Function to slide images based on the current counter
const slideImage = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Event listeners for previous and next buttons
document.getElementById("prevButton").addEventListener("click", goPrev);
document.getElementById("nextButton").addEventListener("click", goNext);
