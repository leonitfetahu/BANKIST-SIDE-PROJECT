const Form = document.querySelector("#signIN");
const Btn = document.querySelector("#Submit");
const Sign = document.querySelector("#SIGNIN");
const log = document.querySelector("#LOGIN");
const navbar = document.querySelector(".navbar");
Form.classList.add("hidden");

//logic when user wants to start the app a
let user = true;

//when user clicks sign in
Sign.addEventListener("click", function () {
  Sign.classList.add("hidden");
  Form.classList.remove("hidden");
  log.classList.add("hidden");

  if (user === true) {
  }
});

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstname = document.querySelector("#Fname").value;
  const lastname = document.querySelector("#Lname").value;
  const PERSON = {
    firsName: firstname,
    lastName: lastname,
    balance: 0,
  };

  localStorage.setItem("SIGN IN", JSON.stringify(PERSON));
  alert("account created");

  setInterval(() => {
    window.location.href = "login.html";
  }, 3000);
});

log.addEventListener("click", function () {
  Form.classList.remove("hidden");
  Sign.classList.add("hidden");
  log.classList.add("hidden");
});
