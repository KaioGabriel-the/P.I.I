// Questão 02 - Letra A - JavaScript
let letraA = document.getElementById("letraA");
letraA.innerHTML = "A letra A foi escrita via getElementById!";

// Questão 02 - Letra B - JavaScript
let letraB = document.getElementsByTagName("p");
for (let i = 0; i < letraB.length; i++) {
    letraB[i].innerHTML = "A letra B foi escrita via getElementsByTagName!";
}