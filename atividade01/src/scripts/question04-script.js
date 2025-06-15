const uploadImagem = document.getElementById("uploadImagem");
const botaoCarregar = document.getElementById("botaoCarregar");
const resultado = document.getElementById("resultado");

botaoCarregar.addEventListener("click", () => {
  // Limpar resultado anterior
  resultado.innerHTML = "";

  // Obter o arquivo selecionado
  const arquivoSelecionado = uploadImagem.files[0];

  if (!arquivoSelecionado) {
    alert("Por favor, selecione uma imagem antes de carregar.");
    return;
  }

  // Criar elemento img
  const img = document.createElement("img");

  // Definir a fonte da imagem usando URL.createObjectURL
  img.src = URL.createObjectURL(arquivoSelecionado);

  // Adicionar a imagem à div resultado
  resultado.appendChild(img);
});
