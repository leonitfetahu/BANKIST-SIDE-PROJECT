
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
  //to see if it exist 
 const testing = ACCOUNTS.find(arr => 
arr.firstname === InputF && arr.lastname === InputL && arr.Password ===
inputPassword

)

if(testing){

alert("Please wait for verification!");
setTimeout(()=>{
window.location.href = "final.html";

}, 3000)

}

else{
alert("Wrong credentials");
return;

}


// here was the windowlocation href to final.html



});























// const SUBMIT = document.querySelector("#Submit");
// const LOGin = document.querySelector("#LOGIN");

// LOGin.classList.add("hidden");

// let user = false;

//  SUBMIT.addEventListener("click",function(){
//     user = true;
//     window.location.href("final.html");


//  })


// const Local = JSON.parse(localStorage.getItem("SIGNIN"));



 
//  setInterval(()=>{

//     if(user !== SUBMIT ){

//     alert("Please press the Submit");
    
// }

// }, 30000);