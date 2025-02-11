import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  document.getElementById("error-msg").style.display = "none"
  document.getElementById("sendForm").addEventListener("click", chequeo)
};

function chequeo() {
  let tarjeta = document.getElementById("card").value
  if (tarjeta == "") {
    alert("missing card number");
    document.getElementById("error-msg").style.display = "block"
    return 
  }
  let cvcnumber = document.getElementById("cvc").value
  if (cvcnumber == "") {
    alert("missing cvc number")
    document.getElementById("error-msg").style.display = "block"
    return
  }
}