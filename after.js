// Get the form element
const form = document.querySelector('#signup-form');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  // Get user inputs
  const passcode = document.querySelector('#passcode').value;

  // Store user inputs to local storage
  localStorage.setItem('passcode', passcode);

  alert('Sign up successful!');
  form.reset(); // Reset form inputs
});

function submitForm() {
  var passcode = document.getElementById("passcode").value;

  if (passcode) {
    // react to another page
    window.location.href = 'payin.html';
  } else {
    alert('please fill in all fields.');
  }
}