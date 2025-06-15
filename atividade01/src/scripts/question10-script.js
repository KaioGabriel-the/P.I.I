const ativosDisponiveis = document.getElementById("ativosDisponiveis");
const carteiraInvestimentos = document.getElementById("carteiraInvestimentos");
const moverParaDireitaBtn = document.getElementById("moverParaDireitaBtn");
const moverParaEsquerdaBtn = document.getElementById("moverParaEsquerdaBtn");

function moverSelecionados(origem, destino) {
  const selecionados = Array.from(origem.selectedOptions);
  if (selecionados.length === 0) {
    alert("Selecione pelo menos um item para mover.");
    return;
  }

  selecionados.forEach((option) => {
    origem.removeChild(option);
    destino.appendChild(option);
  });

  atualizarEstadoBotoes();
}

function atualizarEstadoBotoes() {
  moverParaDireitaBtn.disabled = ativosDisponiveis.options.length === 0;
  moverParaEsquerdaBtn.disabled = carteiraInvestimentos.options.length === 0;
}

moverParaDireitaBtn.addEventListener("click", () => {
  moverSelecionados(ativosDisponiveis, carteiraInvestimentos);
});

moverParaEsquerdaBtn.addEventListener("click", () => {
  moverSelecionados(carteiraInvestimentos, ativosDisponiveis);
});

// Estado inicial dos botões
atualizarEstadoBotoes();
