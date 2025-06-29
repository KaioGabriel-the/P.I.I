function getById(id) {
    return document.getElementById(id);
}

function renderizarTabela() {
    // Limpa a tabela inteira
    tabela.innerHTML = "";

    // Percorre o array e renderiza cada tarefa
    tarefas.forEach(tarefa => {
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).innerText = tarefa.id;
        novaLinha.insertCell(1).innerText = tarefa.descricao;
        novaLinha.insertCell(2).innerText = tarefa.dataInicio;
        novaLinha.insertCell(3).innerText = tarefa.dataFinal || "-";

        const cellConcluir = novaLinha.insertCell(4);
        const cellRemover = novaLinha.insertCell(5);
        const cellReabrir = novaLinha.insertCell(6);

        // Botão Concluir
        const botaoConcluir = document.createElement("button");
        botaoConcluir.innerText = "Concluir";
        botaoConcluir.style.backgroundColor = "#05F283";
        botaoConcluir.style.color = "#fff";
        botaoConcluir.style.border = "none";
        botaoConcluir.style.borderRadius = "4px";
        botaoConcluir.style.padding = "5px 10px";
        botaoConcluir.style.marginRight = "5px";
        botaoConcluir.style.cursor = "pointer";

        botaoConcluir.addEventListener("click", () => {
            tarefa.dataFinal = new Date().toLocaleDateString();
            tarefa.finalizado = true;
            renderizarTabela(); // re-renderiza a tabela para atualizar
        });

        // Botão Remover
        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "Remover";
        botaoRemover.style.backgroundColor = "#F25774";
        botaoRemover.style.color = "#fff";
        botaoRemover.style.border = "none";
        botaoRemover.style.borderRadius = "4px";
        botaoRemover.style.padding = "5px 10px";
        botaoRemover.style.cursor = "pointer";

        botaoRemover.addEventListener("click", () => {
            if (tarefa.finalizado) {
                const vazio = getById("vazio");
                if (vazio) vazio.innerHTML = "Não pode excluir uma tarefa concluída.";
                return;
            }
            if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
                tarefas.splice(tarefas.findIndex(t => t.id === tarefa.id), 1);
                renderizarTabela();
            }
        });

        // Botão Reabrir
        const botaoReabrir = document.createElement("button");
        botaoReabrir.innerText = "Reabrir";
        botaoReabrir.style.backgroundColor = "#2291F2";
        botaoReabrir.style.color = "#fff";
        botaoReabrir.style.border = "none";
        botaoReabrir.style.borderRadius = "4px";
        botaoReabrir.style.padding = "5px 10px";
        botaoReabrir.style.marginRight = "5px";
        botaoReabrir.style.cursor = "pointer";

        botaoReabrir.addEventListener("click", () => {
            tarefa.dataFinal = "";
            tarefa.finalizado = false;
            renderizarTabela();
        });

        cellConcluir.appendChild(botaoConcluir);
        cellRemover.appendChild(botaoRemover);
        cellReabrir.appendChild(botaoReabrir);

        // Risco visual para tarefas concluídas
        if (tarefa.finalizado) novaLinha.style.textDecoration = "line-through";
    });
}

var botao = getById("adicionarBtn");
var tabela = getById("tabelaTarefas").getElementsByTagName("tbody")[0];
var idCounter = 0;
var tarefas = []; 

botao.addEventListener('click', () => {
    const descricao = getById("descricaoTarefa").value.trim();
    const vazio = getById("vazio");
    if (vazio) vazio.innerHTML = ""; // limpa mensagem

    if (descricao === "") {
        if (vazio) vazio.innerHTML = "Não possui nada para ser adicionado.";
        return;
    }

    idCounter++;
    const dataInicio = new Date().toLocaleDateString();

    const tarefa = {
        id: idCounter,
        descricao: descricao,
        dataInicio: dataInicio,
        dataFinal: "",
        finalizado: false
    };

    tarefas.push(tarefa);
    renderizarTabela();

    getById("descricaoTarefa").value = "";
});
