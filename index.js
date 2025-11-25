const Form = document.querySelector("#signIN");
const Btn = document.querySelector("#Submit");
const Sign = document.querySelector("#SIGNIN");
const log = document.querySelector("#LOGIN");
const navbar = document.querySelector(".navbar");
Form.classList.add("hidden");


console.log("Just a small testing ");
//logic when user wants to start the app a


//when user clicks sign in
Sign.addEventListener("click", function () {
  Sign.classList.add("hidden");
  Form.classList.remove("hidden");
  log.classList.add("hidden");

 
});

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputFirst = document.querySelector("#Fname").value;
  const inputLast = document.querySelector("#Lname").value;
      //local storage name saved as an object
  const PERSON = {
    USER:{
    firstName: inputFirst,
    lastName: inputLast,
    balance: 0,
    },
    Account : {
    Depozita: 0,
    Money: 10000,
    Bilanci: 0,
}
  };

  const storingS = JSON.parse(localStorage.getItem("SIGNIN"));

  if(storingS&& storingS.USER.firstName === inputFirst && storingS.USER.lastName === inputLast){
alert("There is an account with this credentials");
return;

  }
  // setting up the object in localstorage with the name SIGNIN
  localStorage.setItem("SIGNIN", JSON.stringify(PERSON));
  alert("account created");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 3000);
});

log.addEventListener("click", function () {
  Form.classList.remove("hidden");
  Sign.classList.add("hidden");
  log.classList.add("hidden");
});
