const button = document.querySelector("#button");
const email = document.querySelector("#email");
const textError = document.querySelector(".form__error");
const form = document.querySelector(".form");
const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let errors = [];

button.addEventListener("click", (e) => {
  textError = classList.remove("form__success");
  errors = [];
});
