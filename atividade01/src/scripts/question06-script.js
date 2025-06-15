document.getElementById('enviarBtn').addEventListener('click', () => {
  const checkboxes = document.getElementsByName('redesSociais');
  const mensagemErro = document.getElementById('mensagemErro');
  const redesSelecionadas = document.getElementById('redesSelecionadas');

  // Limpa mensagens anteriores
  mensagemErro.textContent = '';
  redesSelecionadas.textContent = '';

  // Array para guardar valores selecionados
  const selecionadas = [];

  // Percorre os checkboxes e verifica quais estão marcados
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selecionadas.push(checkboxes[i].value);
    }
  }

  if (selecionadas.length === 0) {
    // Nenhum marcado: exibe mensagem de erro
    mensagemErro.textContent = 'Por favor, selecione pelo menos uma rede social.';
    mensagemErro.style.color = 'red';
  } else {
    // Exibe as redes selecionadas
    redesSelecionadas.textContent = 'Redes sociais selecionadas: ' + selecionadas.join(', ');
    redesSelecionadas.style.color = 'green';
  }
});
