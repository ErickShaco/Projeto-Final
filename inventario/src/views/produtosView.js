/** 
 * Interface para interação com o usuário para gerenciamento de produtos. 
 * - Exibe o menu de opções. 
 * - Recebe dados do usuário para listar, cadastrar, atualizar ou remover 
produtos. 
 */

import prompt from "prompt-sync"
import utils from "../../utils/utils.js"
import menuPrincipal from "../index.js"
import produtosController from "../controllers/produtosController.js"


const width = 80
const input = prompt()

const adcProduto = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Cadastrar usuário", width))
    console.log(utils.createBase(width))
    let id = Date.now().toString()
    const nome = input("| * Nome: ")
    const categoria = input("| * Categoria: ")
    const quantidade = input("| * Quantidade: ")
    const preco = input("| * Preço: ")
    produtosController.save({ id, nome, categoria, quantidade, preco })
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Produto cadastrado com sucesso!", width))
    console.log(utils.createBase(width))
    input("Pressione Enter para continuar...")
    produtosView()
}



const listarProdutos = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Todos os Produtos", width))
    console.log(utils.createBase(width))
    produtosController.getProdutos().forEach(produto => {
        console.log(utils.formatMessage(`ID: ${produto.id}`, width))
        console.log(utils.formatMessage(`Nome: ${produto.nome}`, width))
        console.log(utils.formatMessage(`Categoria: ${produto.categoria}`, width))
        console.log(utils.formatMessage(`Quantidade: ${produto.quantidade}`, width))
        console.log(utils.formatMessage(`Preço: ${produto.preco}`, width))
        console.log(utils.formatMessage("", width))
    })
    console.log(utils.createBase(width))
    input("Pressione Enter para continuar...")
    produtosView()
}

const atualizarQtd = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Atualização de Quantidade", width))
    console.log(utils.createBase(width))
    const id = input("| * ID:").trim()
    const produto = produtosController.findById(id)
    if (produto) {
        console.log(utils.formatMessage(`ID: ${produto.id}`, width))
        console.log(utils.formatMessage(`Quantidade: ${produto.quantidade}`, width))
        console.log(utils.formatMessage(`Nome: ${produto.nome}`, width))
        console.log(utils.createBase(width))
        const quantidade = input("| * Nova Quantidade: ") || produto.quantidade
        const produtoUpdate = { quantidade }
        produtosController.save(produtoUpdate)
        console.log(utils.createBase(width))
        console.log(utils.formatMessage("Quantidade Alterada com sucesso!", width))
        console.log(utils.createBase(width))
    } else {
        console.log(utils.createBase(width))
        console.log(utils.formatMessage("Produto não encontrado!", width))
        console.log(utils.createBase(width))
    }
    input("Pressione Enter para continuar...")
    produtosView()
}

const excluirProduto = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Excluir Produto", width))
    console.log(utils.createBase(width))
    const id = input("| * ID: ")
    const produto = produtosController.findById(id)
    if (produto) {
        console.log(utils.formatMessage(`Nome: ${produto.nome}`, width))
        console.log(utils.formatMessage(`Categoria: ${produto.categoria}`, width))
        console.log(utils.formatMessage(`Quantidade: ${produto.quantidade}`, width))
        console.log(utils.formatMessage(`Preço: ${produto.preco}`, width))
        console.log(utils.createBase(width))
        const confirmacao = input("| * Deseja realmente excluir? (s/n): ")
        if (confirmacao === "s") {
            produtosController.remove(id)
            console.log(utils.createBase(width))
            console.log(utils.formatMessage("Produto excluído com sucesso!", width))
            console.log(utils.createBase(width))
        }
    } else {
        console.log(utils.createBase(width))
        console.log(utils.formatMessage("Produto não encontrado!", width))
        console.log(utils.createBase(width))
    }
    input("Pressione Enter para continuar...")
    produtosView()
}







const produtosView = () => {
    console.clear();
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Menu Produtos", width))
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("1 - Listar todos os Produtos", width))
    console.log(utils.formatMessage("2 - Adicionar Produto", width))
    console.log(utils.formatMessage("3 - Atualizar Quantidade", width))
    console.log(utils.formatMessage("4 - Excluir Produto", width))
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width))
    console.log(utils.createBase(width))
    const opcao = input("| * Digite a opção desejada: ")
    switch (opcao) {
        case "0":
            menuPrincipal()
            break;
        case "1":
           listarProdutos()
            break;
        case "2":
            adcProduto()
            break;
        case "3":
            atualizarQtd()
            break;
        case "4":
            excluirProduto()
            break;
        case "5":
            
            break;
        default:
           
    }
};

export default produtosView

