// Dados a serem consumidos
const informacoesClientes = [
    {
        cpf: 12345678998,
        nome: "Helton"
    }
]

// Monta tabela
const conteudoLinha = `
    <tr>
        <td>${informacoesClientes[0].cpf}</td>
        <td>${informacoesClientes[0].nome}</td>
    </tr>
`

//Insere dado no html
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

corpoTabela.innerHTML = conteudoLinha;
// console.log(corpoTabela);