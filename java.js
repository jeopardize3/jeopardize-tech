function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFuction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFution() {
  var x = document.getElementById("confirm_password");
  if (x.type === "confirm_password") {
    x.type = "text";
  } else {
    x.type = "confirm_password";
  }
}

  function checkPassword(input) {
    if (input.value !== document.getElementById('password').value) {
      input.setCustomValidity('Passwords must match');
      document.getElementById('password_message').innerHTML = 'Passwords must match';
    } else {
      input.setCustomValidity('');
      document.getElementById('password_message').innerHTML = '';
    }
  }
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the username and password match some predefined values
    if (username === "Jeopardize " && password === "1234") {
      alert("Login successful!");
      window.location.href = "login.html"; // Redirect to another page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

