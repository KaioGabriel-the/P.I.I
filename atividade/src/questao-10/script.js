function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (document.getElementById("soma").checked) {
    resultado = n1 + n2;
  } else if (document.getElementById("subtracao").checked) {
    resultado = n1 - n2;
  } else if (document.getElementById("multiplicacao").checked) {
    resultado = n1 * n2;
  } else if (document.getElementById("divisao").checked) {
    resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero";
  } else {
    resultado = "Operação inválida";
  }

  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
