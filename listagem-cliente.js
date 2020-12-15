// Dados a serem consumidos
const informacoesClientes = [
    {
        cpf: 12345678998,
        nome: "Helton"
    },{
        cpf: 98765432112,
        nome: "Teste"
    }
]

//Seleciona a tabela por data-attribute
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {
    // Monta tabela
    const linha = document.createElement('tr')
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `
    
    linha.innerHTML = conteudoLinha

    return linha
}

//Insere dado no html
listarClientes().then( exibe => {
    exibe.forEach( indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
    })
}

)