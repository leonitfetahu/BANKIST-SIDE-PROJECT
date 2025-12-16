const btnExit = document.getElementById("EXIT");
const balanceInput = document.querySelector("#Balance");
const depositInput = document.querySelector("#Deposit"); 
const btnSend = document.querySelector("#Send"); //send money button
const HiddenContainer = document.querySelector(".container2");
const DropDownList = document.querySelector("#LocalAccounts"); //the drop down list
// alert("verification completed");
HiddenContainer.style.display = "none";
DropDownList.classList.add("hidden");




// WHEN USER CLICKS ON THE BUTTON SEND THISIS THE MAIN EVENHANDLER
btnSend.addEventListener("click",function(e){
    e.preventDefault();
  HiddenContainer.style.display = "flex";  // restores proper flex layout
DropDownList.classList.remove("hidden");
   
const LocalStorageAccounts = JSON.parse(localStorage.getItem("SIGNIN")) || [];
DropDownList.innerHTML ="";

LocalStorageAccounts.forEach((acc)=>{
if(acc.firstname&&acc.lastname){
const Fname = document.createElement("option");
Fname.textContent = acc.firstname + " " + acc.lastname;
DropDownList.appendChild(Fname);
    
}



})



})





const GOback = function(){
window.location.href = "login.html";

}

btnExit.addEventListener("click", GOback);

