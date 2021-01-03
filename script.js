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

// Check for proper email validation
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Check required fields
function checkRequiredField(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} Is required`)
        } else{
            showSuccess(input);
        }
        // console.log(input.value);
    });
};

// Function to get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// event listener 
form.addEventListener("submit", function(e){
    e.preventDefault();

  checkRequiredField([username,email,password,password02]);
});

// old "if else" validation 
// if (username.value === "") {
//     showError(username, "Username is required");
// } else{
//     showSuccess(username);
// }

// if (email.value === "") {
//     showError(email, "Email is required");
// } else if(!isValidEmail(email.value)){
//     showError(email,"Email is not Valid");
// }
// else{
//     showSuccess(email);
// }

// if (password.value === "") {
//     showError(password, "Password is required");
// } else{
//     showSuccess(password);
// }

// if (password02.value === "") {
//     showError(password02, "Password 2 is required");
// } else{
//     showSuccess(password02);
// }