var idadeText = document.getElementById("idade");

function getIdadeAtual(hoje) {
    var data = new Date;
    ano_atual = data.getFullYear();
    mes_atual = data.getMonth() + 1;
    dia_atual = data.getDate();
    idade_atual_aproximada = ano_atual - hoje['ano'];
    if (
        (mes_atual < hoje['mes'])
        || (mes_atual == hoje['mes'] && dia_atual < hoje['dia'])) {
            return idade_atual_aproximada-1;
    }
    return idade_atual_aproximada;
}

function carregarIdade() {
    var idade = getIdadeAtual(aniversario);
    idadeText.innerHTML = `${idade} anos`;
}

carregarIdade();