/** 
 * Interface para interação com o usuário para gerenciamento de produtos. 
 * - Exibe o menu de opções. 
 * - Recebe dados do usuário para listar, cadastrar, atualizar ou remover 
produtos. 
 */

import prompt from "prompt-sync"
import utils from "../../utils/utils.js"
import menuPrincipal from ".."

const prompt = prompt()
const width = 80

const cadastrarUsuario = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Cadastrar usuário", width))
    console.log(utils.createBase(width))
    const cpf = prompt("| * CPF: ")
    const nome = prompt("| * Nome: ")
    const fone = prompt("| * Fone: ")
    const email = prompt("| * E-mail: ")
    usuarioController.save({ cpf, nome, fone, email })
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Usuário cadastrado com sucesso!", width))
    console.log(utils.createBase(width))
    prompt("Pressione Enter para continuar...")
    usuarioView()
}

const produtosView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Produtos", width))
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("1 - Listar todos os Produtos", width))
    console.log(utils.formatMessage("2 - Adicionar Produto", width))
    console.log(utils.formatMessage("3 - Atualizar Quantidade", width))
    console.log(utils.formatMessage("4 - Excluir Produto", width))
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width))
    console.log(utils.createBase(width))
    const opcao = prompt("| * Digite a opção desejada: ")
    switch (opcao) {
        case "0":
            menuPrincipal()
            break;
        case "1":
            cadastrarUsuario()
            break;
        case "2":
            editarUsuario()
            break;
        case "3":
            excluirUsuario()
            break;
        case "4":
            listarUsuarios()
            break;
        case "5":
            buscarUsuario()
            break;
        default:
            usuarioView()
    }
};

// Exporta a visualização de usuário
export default produtosView