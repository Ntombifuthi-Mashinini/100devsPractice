// Keep track of attempts globally (outside the function)
let attempts = 0;

// When the login button is clicked → trigger validateLogin
document.getElementById("login").addEventListener("click", validateLogin);

function validateLogin() {
  // Stored credentials
  const correctUserName = "Londi";
  const correctPassword = "Londi@2023";

  // Get entered values
  const enteredUserName = document.querySelector("#username").value;
  const enteredPassword = document.querySelector("#password").value;
  const output = document.querySelector("#output");

  // Compare entered values with stored ones
  if (enteredUserName === correctUserName && enteredPassword === correctPassword) {
    output.textContent = "Login successful!";
  } else if (enteredUserName === correctUserName && enteredPassword !== correctPassword) {
    output.textContent = "Incorrect password";
  } else if (enteredUserName !== correctUserName && enteredPassword === correctPassword) {
    output.textContent = "Incorrect username.";
  } else {
    output.textContent = "Invalid credentials. Try again.";
  }

  // Increase attempts
  attempts++;
  if (attempts >= 3) {
    output.textContent = "Account locked. Too many attempts.";
    document.getElementById("login").disabled = true; // disable login button
  }
}