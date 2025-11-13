const btnExit = document.getElementById("EXIT");
const balanceInput = document.querySelector("#Balance");
const depositInput = document.querySelector("#Deposit"); 
const btnSend = document.querySelector("#Send");

alert("verification completed");

const Account = {
Depozita: 0,
Money: 10000,
Bilanci: 0,
}

localStorage.setItem("Main", JSON.stringify(Account));


balanceInput.value = Account.Money;


btnSend.addEventListener("click",function(){
JSON.parse(localStorage.getItem("Main"));

const Ruaj = Number(depositInput.value);

balanceInput.value = Account.Money;
Account.Money -= Ruaj 
 localStorage.setItem("Main",JSON.stringify(Account));


})


const GOback = function(){
window.location.href = "login.html";

}

btnExit.addEventListener("click", GOback);

