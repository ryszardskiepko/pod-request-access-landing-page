const button = document.querySelector("#button");
const input = document.querySelector("#email");
const textError = document.querySelector(".form__error");
const form = document.querySelector(".form");
const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let errors = [];

button.addEventListener("click", (e) => {
  textError = classList.remove("form__success");
  errors = [];
  e.preventDefault();
  const email = input.value;
  if (email === "" || email === undefined || !email.match(validation)) {
    errors.push("Oops! Please check your email");
    textError.innerHTML = errors[0];
  }
  if (!errors.length > 0) {
    textError.classList.add("form__success");
    textError.innerHTML = "Check your email for confirmation";
  }
});
