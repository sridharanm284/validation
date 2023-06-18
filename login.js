function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    // Perform login validation
    // Replace the following with your actual login validation logic
    if (email === "admin@gmail.com" && password === "123") {
      // Redirect to landing.html
      window.location.href = "landing.html";
    } else {
      alert("Invalid email or password");
    }
  }
  