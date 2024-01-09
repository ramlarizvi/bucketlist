function cancelSignUp() {
    // Add code to handle cancel action if needed
    alert("Sign up canceled");
  }
  
  function registerUser() {
    // Add code to handle user registration 
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("psw-repeat").value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Add code to register the user (for demonstration purposes)
    alert("User registered!\nEmail: " + email);
  };
        