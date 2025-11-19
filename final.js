const btnExit = document.getElementById("EXIT");
const balanceInput = document.querySelector("#Balance");
const depositInput = document.querySelector("#Deposit"); 
const btnSend = document.querySelector("#Send");

alert("verification completed");



 const storeed = JSON.parse(localStorage.getItem("SIGNIN"));

 balanceInput.value = storeed.Account.Money;

 btnSend.addEventListener("click", function(){
const ruajtje = Number(depositInput.value);
storeed.Account.Money -= ruajtje;
balanceInput.value = storeed.Account.Money;
localStorage.setItem("SIGNIN", JSON.stringify(storeed));

 })


const GOback = function(){
window.location.href = "login.html";

}

btnExit.addEventListener("click", GOback);

