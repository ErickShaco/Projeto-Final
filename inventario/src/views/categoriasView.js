 /** 
 * Interface para interação com o usuário para gerenciamento de categorias. 
 * - Exibe o menu de opções. 
 * - Recebe dados do usuário para listar ou cadastrar categorias. 
 */
import utils from "../../utils/utils"
import prompt from "prompt-sync"

const input = prompt()


const listarCategorias = () => {
    console.clear()
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Todos as Categorias", width))
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




 const categoriaView = () => {
    console.clear();
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("Menu Categoria", width))
    console.log(utils.createBase(width))
    console.log(utils.formatMessage("1 - Listar todas as categorias cadastradas", width))
    console.log(utils.formatMessage("2 - Adicionar novas categorias", width))            
    console.log(utils.formatMessage("3 -  Exibir produtos filtrados por categoria", width))
    console.log(utils.createBase(width))
    const opcao = input("| * Digite a opção desejada: ")
    switch (opcao) {
        case "0":
            menuPrincipal()
            break;
        case "1":
           
            break;
        case "2":
            
            break;
        case "3":
           
            break;
        case "4":
           
            break;
        case "5":
            
            break;
        default:
           
    }
};

export default categoriaView