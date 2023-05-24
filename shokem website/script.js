// Get the carousel elements
var carousel = document.querySelector('.carousel');
var slides = Array.from(carousel.getElementsByClassName('carousel-slide'));

// Initialize the index of the current slide
var currentIndex = 0;

// Function to show the current slide
function showSlide() {
  // Reset all slides
  slides.forEach(function (slide) {
    slide.classList.remove('active');
  });

  // Set the current slide as active
  slides[currentIndex].classList.add('active');
}

// Function to show the next slide
function showNextSlide() {
  // Increment the index
  currentIndex++;

  // Check if the index exceeds the number of slides
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  // Calculate the translation value
  var translateXValue = currentIndex * -100 + '%';

  // Apply the translation to the carousel element
  carousel.style.transform = 'translateX(' + translateXValue + ')';

  // Show the current slide
  showSlide();
}

// Set an interval to show the next slide every 3 seconds
setInterval(showNextSlide, 3000);

// Show the initial slide
showSlide();
