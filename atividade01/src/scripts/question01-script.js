function exibirErro(mensagem, idElemento) {
  const elemento = document.getElementById(idElemento);
  if (!elemento) {
    console.warn(`Elemento com ID "${idElemento}" não encontrado.`);
    return
  };

  elemento.textContent = mensagem;
  elemento.classList.remove('oculto');
  elemento.classList.add('ativo');

  // Esconde após 3 segundos
  setTimeout(() => {
    elemento.classList.add('oculto');
    elemento.classList.remove('ativo');
    elemento.textContent = '';
  }, 3000);
}

// Evento para testar
document.getElementById('botaoErro').addEventListener('click', function () {
  exibirErro('O campo deve ser preenchido!', 'mensagemErro');
});
