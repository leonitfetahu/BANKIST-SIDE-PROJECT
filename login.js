
const SUBMIT = document.querySelector("#Submit");
const LOGin = document.querySelector("#LOGIN");

LOGin.classList.add("hidden");



const ACCOUNTS = JSON.parse(localStorage.getItem("SIGNIN")) || [];

SUBMIT.addEventListener("click", function (e) {
  e.preventDefault();

  // we created these 2 variables bcs of inputs we had on login.html and this gets them and only shows theyr values in screen 
 const InputF = document.querySelector("#Fname").value.trim();
 const InputL = document.querySelector("#Lname").value.trim();
 const inputPassword = document.getElementById("Password").value;


if(InputF === "Admin" && InputL === "Bank" && inputPassword === "Admin12345"){
  const AdminAccount = ACCOUNTS.find(acc =>
acc.firstname === "Admin" && acc.lastname === "Bank" && acc.Password === "Admin12345"

  )

if(AdminAccount){
   localStorage.setItem("CurrentUser", JSON.stringify(AdminAccount));
alert("Loging in as ADMIN! PLEASE WAIT");
setTimeout(()=>{
window.location.href = "final.html";

},3000);
return; 

}

else{
alert("Account not found");
return;

}
}

  //to see if it exist 
 const testing = ACCOUNTS.find(arr => 
arr.firstname === InputF && arr.lastname === InputL && arr.Password ===
inputPassword

)

if(testing){
alert("Please wait for verification!");
setTimeout(()=>{
window.location.href= "users.html";

},3000)
return;
}
else{
alert("Wrong credentials");
return;

}





// here was the windowlocation href to final.html



});























