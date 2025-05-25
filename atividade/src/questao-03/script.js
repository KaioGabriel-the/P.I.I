let qtdParagrafos = 0;
let qtdParagrafosInput = document.getElementById("paragrafos");
qtdParagrafosInput = qtdParagrafosInput.getElementsByTagName("p")
qtdParagrafos = qtdParagrafosInput.length;

let quantidade = document.getElementById("quantidade");
quantidade.innerHTML = "Quantidade e paragrafos é " + qtdParagrafos;