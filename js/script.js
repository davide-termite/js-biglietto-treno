// Kilometers
var km = parseInt(prompt ("Quanti km devi percorrere?"));

if ((km <= 0) || isNaN(km)) {
  alert("Inserisci una distanza valida!")
  document.getElementById('ticket-price').innerHTML = "Ricarica la pagina";
  document.getElementById('ticket-discount').innerHTML = "Ricarica la pagina";
}

// Pricing
var ticketFullPrice = km * 0.21;

// console.log(ticketFullPrice);

// Age
var age = prompt("Quanti anni hai?");

if ((age <= 0) || isNaN(age)) {
  alert("Inserisci un'età valida!")
  document.getElementById('ticket-price').innerHTML = "Ricarica la pagina";
  document.getElementById('ticket-discount').innerHTML = "Ricarica la pagina";
}

// Discounts
var discountYoung =  ticketFullPrice * 0.2;
var discountSenior = ticketFullPrice * 0.4;

// console.log(discountYoung);
// console.log(discountSenior);

if (age <= 17){
  var ticketDiscountPrice = ticketFullPrice - discountYoung
  document.getElementById('ticket-price').innerHTML = "Il prezzo del biglietto è " + ticketDiscountPrice + "€";
  document.getElementById('ticket-discount').innerHTML = "Hai ricevuto uno sconto del 20% perchè hai " + age + " anni";
} else if ((age >= 18) && (age <= 65)) {

  document.getElementById('ticket-price').innerHTML = "Il prezzo del biglietto è " + ticketFullPrice + "€";
  document.getElementById('ticket-discount').innerHTML = "Non hai ricevuto alcun tipo di sconto";
} else if (age >= 66) {

  var ticketDiscountPrice = ticketFullPrice - discountSenior
  document.getElementById('ticket-price').innerHTML = "Il prezzo del biglietto è " + ticketDiscountPrice + "€";
  document.getElementById('ticket-discount').innerHTML = "Hai ricevuto uno sconto del 20% perchè hai " + age + " anni";
}
