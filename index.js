const Form = document.querySelector("#signIN");
const Btn = document.querySelector("#Submit");
const Sign = document.querySelector("#SIGNIN");
const log = document.querySelector("#LOGIN");
const navbar = document.querySelector(".navbar");
const inputPassword = document.getElementById("password");
Form.classList.add("hidden");






//when user clicks sign in
Sign.addEventListener("click", function () {
  Sign.classList.add("hidden");
  Form.classList.remove("hidden");
  log.classList.add("hidden");

 
});
let ACCOUNTS = [];

try {
  const parsed = JSON.parse(localStorage.getItem("SIGNIN"));
  if (Array.isArray(parsed)) {
    ACCOUNTS = parsed;
  } else if (parsed && typeof parsed === "object") {
    // old object → wrap in array
    ACCOUNTS = [parsed];
  } else {
    ACCOUNTS = [];
  }
} catch (err) {
  ACCOUNTS = [];
}


Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputFirst = document.querySelector("#Fname").value;
  const inputLast = document.querySelector("#Lname").value;
  
  const AccInfo = {
    firstname: inputFirst,
    lastname: inputLast,
    Password: inputPassword.value,
    balance: 0

}

const existingAccount = ACCOUNTS.find(acc => 
acc.firstname === inputFirst && acc.lastname === inputLast

)
if(existingAccount){
alert("already exist")
return;

}
else{

  ACCOUNTS.push(AccInfo);

localStorage.setItem("SIGNIN", JSON.stringify(ACCOUNTS));
   alert("account created");
setTimeout(()=>{

window.location.href ="login.html";

}, 3000)
}


  


});

log.addEventListener("click", function () {
  Form.classList.remove("hidden");
  Sign.classList.add("hidden");
  log.classList.add("hidden");
});
