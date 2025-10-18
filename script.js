//  Select needed elements
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingSection = document.querySelector('section:first-of-type');
const thankYouSection = document.querySelector('.sectionTwo');
const ratingResult = document.getElementById('rating-result');

//Create a variable to store the selected rating
let selectedRating = null;



//  Add click event listeners to all rating buttons
ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons first
    ratingButtons.forEach((btn) => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
    
    // Store the rating value (the button's text content)
    selectedRating = button.textContent;
  });
});

//  Add click event listener to submit button
submitButton.addEventListener('click', () => {
  // Check if a rating was selected
  if (selectedRating) {
    // Update the rating result text
    ratingResult.textContent = selectedRating;
    
    // Hide the rating section
    ratingSection.style.display = 'none';
    
    // Show the thank you section
    thankYouSection.style.display = 'block';
  } else {
    // Optional: alert user to select a rating first
    alert('Please select a rating before submitting!');
  }
});