// Variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password02 = document.getElementById("password02");

// show input error msg
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};

// show input success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};



// event listener 
form.addEventListener("submit", function(e){
    e.preventDefault();

  if (username.value === "") {
      showError(username, "Username is required");
  } else{
      showSuccess(username);
  }

  if (email.value === "") {
      showError(email, "Email is required");
  } else{
      showSuccess(email);
  }

  if (password.value === "") {
      showError(password, "Password is required");
  } else{
      showSuccess(password);
  }

  if (password02.value === "") {
      showError(password02, "Password 2 is required");
  } else{
      showSuccess(password02);
  }
});