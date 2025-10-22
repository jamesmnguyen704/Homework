const footer = document.querySelector(`footer`);

// Adds an event listener to the footer that triggers when clicked
footer.addEventListener(`click`, () => {
  // Shows a popup alert message when the footer is clicked
  alert(`Thanks for coming to James' portfolio site!`);
});

// EXPLANATION OF THE CODE:
// 1. document.querySelector() - finds the first element matching the CSS selector
// 2. addEventListener() - attaches an event handler to the selected element
// 3. 'click' - specifies we want to listen for click events
// 4. () => {} - arrow function that runs when the event occurs
// 5. alert() - displays a popup message box to the user
