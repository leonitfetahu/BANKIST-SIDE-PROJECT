

const SUBMIT = document.querySelector("#Submit");
const LOGin = document.querySelector("#LOGIN");

LOGin.classList.add("hidden");

let user = false;

 SUBMIT.addEventListener("click",function(){
    user = true;
    window.location.href("final.html");


 })
 
 setInterval(()=>{

    if(user !== SUBMIT ){

    alert("Please press the Submit");
    
}

}, 30000);