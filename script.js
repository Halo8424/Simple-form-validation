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
};




// event listener 
form.addEventListener("submit", function(e){
    e.preventDefault();

  if (username.value === "") {
      showError(username, "Username is required");
  } else{
      showSuccess(username);
  }
});