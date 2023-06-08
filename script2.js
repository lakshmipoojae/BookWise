document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform authentication and check if login is successful
  var isAuthenticated = performAuthentication(username, password);

  if (isAuthenticated) {
    // Store the logged-in username in session storage
    sessionStorage.setItem('username', username);

    // Redirect to the main page after successful login
    window.location.href = 'index.html';
  } else {
    // Display an error message or perform any other action for failed login
    alert('Invalid username or password. Please try again.');
  }
});

function performAuthentication(username, password) {
  if (username === 'admin' && password === 'password') {
    return true;
  } else {
    return false;
  }
}
