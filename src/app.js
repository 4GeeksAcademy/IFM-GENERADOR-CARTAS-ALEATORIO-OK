/* eslint-disable */
import "bootstrap";
import "./style.css";

// Botón recarga la página al hacer click
const reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", () => {
  location.reload();
});

// Temporizador
setInterval(function() {
  location.reload(); // Recarga la página
}, 10000); // 10000 milisegundos = 10 segundos

let suitsCards = ["♦", "♥", "♠", "♣"];
let numbersCards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J"
];

window.onload = function() {
  //write your code here

  let suitsCardsRamdom =
    suitsCards[Math.floor(Math.random() * suitsCards.length)];
  let numbersCardsRamdom =
    numbersCards[Math.floor(Math.random() * numbersCards.length)];

  let selectorSuits = document.querySelectorAll(".suits");
  for (let element of selectorSuits) {
    element.innerHTML = suitsCardsRamdom;
    if (suitsCardsRamdom === "♦" || suitsCardsRamdom === "♥") {
      element.style.color = "red";
    }
  }

  document.querySelector(".number").innerHTML = numbersCardsRamdom;
};
