function adicionarItem() {
  const texto = document.getElementById("entrada").value;

  if (texto.trim() === "") {
    alert("Digite algo antes de adicionar.");
    return;
  }

  // Cria um novo elemento <li>
  const novoItem = document.createElement("li");

  // Adiciona o conteúdo digitado ao <li>
  novoItem.textContent = texto;

  // Adiciona o <li> dentro da <ul>
  document.getElementById("lista").appendChild(novoItem);

  // Limpa o campo de entrada
  document.getElementById("entrada").value = "";
}
