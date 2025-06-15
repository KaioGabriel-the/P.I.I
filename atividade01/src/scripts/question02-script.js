var botaoExibir = document.getElementById('botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

function exibirConteudo() {
    var campoTexto = document.getElementById('caixaDeTexto');
    var conteudo = campoTexto.value.trim();

    if (conteudo === '') {
      exibirErro('O campo não pode estar vazio!','conteudo');
    } else {
      document.getElementById('conteudo').innerHTML = conteudo;
    }
}

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