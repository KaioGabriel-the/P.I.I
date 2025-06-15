let botao = document.getElementById("botao")
botao.addEventListener("click", ()=>{
    let interacao = document.getElementById("interacao").value.trim(); 
    let visualizacao = document.getElementById("visualizacao").value.trim(); 
    let resultado = document.getElementById("resultado");

    if(interacao === "" || visualizacao === ""){
        resultado.innerHTML = `<h1>Os campos estão vazios</h1>`;
        return;
    }

    let interacaoNum = Number(interacao);
    let visualizacaoNum = Number(visualizacao);

    if(isNaN(interacaoNum || isNaN(visualizacaoNum))){
        resultado.innerHTML = "<h1>Digite números válidos</h1>"
    }

    if (visualizacaoNum === 0) {
        resultado.innerHTML = "<h1>Visualizações não podem ser zero.</h1>";
        return;
    }

    let engajamento = (interacaoNum / visualizacaoNum) * 100;
    resultado.innerHTML = `<h1>O total de engajamento é ${engajamento.toFixed(2)}%</h1>`;
})