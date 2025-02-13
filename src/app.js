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
  let amountnumber = document.getElementById("amount").value
  if (amountnumber == "") {
    alert("missing amount")
    document.getElementById("error-msg").style.display = "block"
    return
  }

  let name = document.getElementById("nombre").value
  if (name == "") {
    alert("missing first name")
    document.getElementById("error-msg").style.display = "block"
    return
  }
  let lastname = document.getElementById("apellido").value
  if (lastname == "") {
    alert("missing last name")
    document.getElementById("error-msg").style.display = "block"
    return
  }
  let ciudad = document.getElementById("city").value
  if (ciudad == "") {
    alert("missing city")
    document.getElementById("error-msg").style.display = "block"
    return
  }
  let estado = document.getElementById("state").value
  if (estado == "Pick a state") {
    alert("missing state")
    document.getElementById("error-msg").style.display = "block"
    return
  }
  let codigopostal = document.getElementById("zip").value
  if (codigopostal == "") {
    alert("missing postal code")
    document.getElementById("error-msg").style.display = "block"
    return
  }
  alert("Payment form completed")
  document.getElementById("error-msg").style.display = "none"
  
}