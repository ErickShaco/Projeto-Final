 /** 
 * Interface para interação com o usuário para gerenciamento de categorias. 
 * - Exibe o menu de opções. 
 * - Recebe dados do usuário para listar ou cadastrar categorias. 
 */
import utils from "../../utils/utils.js"
import prompt from "prompt-sync"
import { categoriaController } from "../controllers/categoriaController.js"
import menuPrincipal from "../index.js"


const input = prompt()
const width = 80

const listarCategorias = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Todos as Categorias", width))
    console.log(utils.createBase(width))
    categoriaController.listarCategorias().forEach(categoria => {
        console.log(utils.formatMessage(`${categoria.atum}`, width))
        console.log(utils.formatMessage(`${categoria.papelHigienico}`, width))
        console.log(utils.formatMessage(`${categoria.macarrao}`, width))
        console.log(utils.formatMessage("", width))
    })
    console.log(utils.createBase(width))
    input("Pressione Enter para continuar...")
    categoriaView()
}

const adcCategoria = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Cadastrar Categoria", width))
    console.log(utils.createBase(width))
    const categoria = input("| * Categoria: ")
    categoriaController.cadastrarCategoria({categoria})
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Produto cadastrado com sucesso!", width))
    console.log(utils.createBase(width))
    input("Pressione Enter para continuar...")
    categoriaView()
}


 const categoriaView = () => {
    console.clear();
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Menu Categoria", width))
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("1 - Listar todas as categorias cadastradas", width))
    console.log(utils.formatMessage("2 - Adicionar novas categorias", width))            
    console.log(utils.formatMessage("3 - Exibir produtos filtrados por categoria", width))
    console.log(utils.createBase(width))
    const opcao = input("| * Digite a opção desejada: ")
    switch (opcao) {
        case "0":
            menuPrincipal()
            break;
        case "1":
           listarCategorias()
            break;
        case "2":
            adcCategoria()
            break;
        case "3":
           
            break;
        default:
           
    }
};

export default categoriaView