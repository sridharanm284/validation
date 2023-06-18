function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
  
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    if (phone === "") {
      alert("Please enter your phone number");
      return;
    }
    if (password === "") {
      alert("Please enter your password");
      return;
    }
    if (confirmPassword === "") {
      alert("Please enter your confirm password");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    console.log("Name:",name)
    console.log("Email:",email)
    console.log("Phone:",phone)
    console.log("Passowrd",password)

    // Redirect to login.html
 
    
  }
  function nextpage(){
    window.location.href = "login.html";
  }
