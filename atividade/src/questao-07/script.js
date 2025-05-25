function copiarTexto() {
  const entrada = document.getElementById("entrada").value;
  const textoMaiusculo = entrada.toUpperCase();
  document.getElementById("saida").value = textoMaiusculo;
}
