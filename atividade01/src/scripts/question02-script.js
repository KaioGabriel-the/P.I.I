var botaoExibir = document.getElementById('botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

function exibirConteudo() {
    var campoTexto = document.getElementById('caixaDeTexto');
    var conteudo = campoTexto.value.trim();

    if (conteudo === '') {
      exibirErro('O campo não pode estar vazio!');
    } else {
      document.getElementById('conteudo').innerHTML = conteudo;
    }
}

function exibirErro(mensagem) {
    var div = document.getElementById('conteudo');
    div.innerHTML = '<span style="color: red;">' + mensagem + '</span>';
}