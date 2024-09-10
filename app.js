function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    console.log(campoPesquisa);

    let resultados = "";
    
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        // se titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            resultados += `
    <div class="item-resultado">
                    <h2>
                        <a href="#" Target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} Target="_blank">Mais informações</a>
                </div>
    `;
        }
    }
    
    section.innerHTML = resultados
}




