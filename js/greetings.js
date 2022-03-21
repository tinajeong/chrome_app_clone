const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginsubmit);
} else {
  paintGreetings();
}

function paintGreetings() {
    loginForm.classList.add(HIDDEN_CLASS);  
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${savedUsername}!`;
}

function onLoginsubmit(event) {
  event.preventDefault();

  console.log(event);

  const userName = loginInput.value;
  
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
  
}

