// Simulated user authentication
function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate successful login
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Check credentials (This is just a simulation, replace with your actual authentication logic)
    if (username === 'user' && password === 'password') {
        // Redirect to main page after successful login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Simulated user signup
function signupUser(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate successful signup
    let newUsername = document.getElementById('new-username').value;
    let newPassword = document.getElementById('new-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    // Check password confirmation (This is just a simulation, replace with your actual signup logic)
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Here you would normally send the signup data to your backend for processing
    alert('Signup successful! Please login to proceed.');
    // Optionally redirect to login page after signup
    window.location.href = 'login.html';
}
