const inputHashtag = document.getElementById("inputHashtag");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");
const listaHashtags = document.getElementById("listaHashtags");
const mensagemErro = document.getElementById("mensagemErro");

// Adicionar nova hashtag
btnAdicionar.addEventListener("click", () => {
  const novaHashtag = inputHashtag.value.trim();
  mensagemErro.textContent = "";

  if (novaHashtag === "") {
    mensagemErro.textContent = "A hashtag não pode estar vazia.";
    return;
  }

  if (novaHashtag.length < 2) {
    mensagemErro.textContent = "A hashtag deve ter pelo menos 2 caracteres.";
    return;
  }

  if (listaHashtags.options.length >= 5) {
    mensagemErro.textContent = "Você só pode adicionar até 5 hashtags.";
    return;
  }

  for (let i = 0; i < listaHashtags.options.length; i++) {
    if (
      listaHashtags.options[i].value.toLowerCase() === novaHashtag.toLowerCase()
    ) {
      mensagemErro.textContent = "Essa hashtag já foi adicionada.";
      return;
    }
  }

  const option = document.createElement("option");
  option.value = novaHashtag;
  option.textContent = novaHashtag;
  listaHashtags.appendChild(option);

  inputHashtag.value = "";
});

// Remover hashtag selecionada
btnRemover.addEventListener("click", () => {
  mensagemErro.textContent = "";

  const selecionadas = listaHashtags.selectedOptions;
  if (selecionadas.length === 0) {
    mensagemErro.textContent = "Selecione uma hashtag para remover.";
    return;
  }

  // Remove todas as selecionadas (permite múltiplas seleções, mesmo que size=5)
  Array.from(selecionadas).forEach((option) => {
    listaHashtags.removeChild(option);
  });
});
