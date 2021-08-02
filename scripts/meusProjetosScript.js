listaProjetosDiv = '';

function generateProjetoDiv(projeto) {
    saida = `
    <div class="projetoDiv" data-aos="flip-down" data-aos-mirror="true" data-aos-duration="1000">
        <div class="header_projeto">
            <a target="_blank" href="${projeto['link']}" class="titulo_projeto">${projeto['nome']}</a>
            <p class="resumo_projeto">${projeto['resumo']}</p>
        </div>
        <div class="body_projeto">
            <p class="detalhado_projeto">${projeto['detalhado']}</p>
            <p class="adicional_projeto">${projeto['adicional']}</p>
            <br>
        </div>
    </div>
    `;
    return saida;
}

function carregarProjetos() {
    for (projetoId in projetos){
        listaProjetosDiv += (generateProjetoDiv(projetos[projetoId]));
    }
    addToDom();
}

function addToDom() {
    projetosDiv = document.getElementById('projetos');
    projetosDiv.innerHTML = listaProjetosDiv;
}

carregarProjetos();