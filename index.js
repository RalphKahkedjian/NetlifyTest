// Function to force light mode styles
function forceLightModeStyles() {
  // Select all elements where color might be affected
  const elements = document.querySelectorAll('*');

  // Loop through each element and override color styles
  elements.forEach(element => {
    element.style.backgroundColor = '#ffffff'; // Set light mode background color
    element.style.color = '#333333'; // Set light mode text color
    // You can adjust other styles as needed for light mode
  });
}

// Function to initialize light mode on page load
function initializeLightMode() {
  forceLightModeStyles(); // Force light mode styles
}

// Initialize light mode on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeLightMode();
});
