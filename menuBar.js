
let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");
let nav = document.getElementById("navBar");

btn.onclick = function(){
  nav.classList.toggle("hidemenu");
  if(icon.classList.contains("fa-bars")){
    icon.classList.replace("fa-bars", "fa-times");
  }else{
    icon.classList.replace("fa-times", "fa-bars");      
  }
}