// Variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password02 = document.getElementById("password02");

// event listener to from element
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(username.value);
})