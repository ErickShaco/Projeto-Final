 /** 
 * Arquivo principal do sistema. 
 * - Inicia o sistema e exibe o menu principal. 
 * - Gerencia a navegação entre os menus de produtos, categorias e 
relatórios. 
 */

import PromptSync from "prompt-sync"
import utils from "../Utils/utils.js"
import produtosView from "./views/produtosView.js"

const prompt = PromptSync()

const menuPrincipal = () => {
    console.clear();
    const width = 80;
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Sistema de Inventario", width))
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("1 - Gerenciar Produtos", width))
    console.log(utils.formatMessage("2 - Gerenciar Categorias", width))
    console.log(utils.formatMessage("3 - Gerar Relatórios", width))
    console.log(utils.formatMessage("0 - Sair", width))
    console.log(utils.createBase(width));
    const opcao = prompt("| * Escolha a opção desejada: ")
    switch (opcao) {
        case "0":
            process.exit()
        case "1":
            produtosView()
            break;
        case "2":
            break;
        default:
    }
}

export default menuPrincipal

