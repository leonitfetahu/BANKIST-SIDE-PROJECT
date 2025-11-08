
const SUBMIT = document.querySelector("#Submit");
const LOGin = document.querySelector("#LOGIN");

LOGin.classList.add("hidden");

// get data from localStorage
const storedUser = JSON.parse(localStorage.getItem("SIGNIN"));

SUBMIT.addEventListener("click", function (e) {
  e.preventDefault();

  // we created these 2 variables bcs of inputs we had on login.html and this gets them and only shows theyr values in screen 
 const InputF = document.querySelector("#Fname").value;
 const InputL = document.querySelector("#Lname").value;
 
 // first we use !storedUser to see if it works

 if(!storedUser){
alert("Please Log in ");
return;
 }
 
 // then we compare if the object data that was stored in localstroage and then when we parsed from previus page we compare if its same 
  if(InputF === storedUser.firstName && InputL === storedUser.lastName){
alert("Please wait for verification")
setTimeout(() => {window.location.href = "final.html"},3000);

 }



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