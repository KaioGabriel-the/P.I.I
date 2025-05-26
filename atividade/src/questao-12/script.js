document.getElementById('btnAdicionar').addEventListener('click', adicionarAoSelect);

function adicionarAoSelect() {
  const textoInput = document.getElementById('texto').value.trim();
  const corSelecionada = document.getElementById('cor').value;

  if (textoInput === '') {
    alert('Por favor, digite algum texto.');
    return;
  }

  const novaOption = document.createElement('option');
  novaOption.text = textoInput;
  novaOption.value = textoInput.toLowerCase().replace(/\s+/g, '-');
  novaOption.style.color = corSelecionada;

  const select = document.getElementById('listaSelect');
  select.appendChild(novaOption);

  document.getElementById('texto').value = '';
}
