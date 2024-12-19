 /** 
 * Funções para manipulação dos dados de categorias. 
 * - getCategorias: Retorna todas as categorias cadastradas. 
 * - addCategoria: Adiciona uma nova categoria ao banco de dados. 
 */


 import { database } from "./database.js"

 export const categoriaRepository = {
     // Listar Todos as Categorias
    getCategorias: (categoria) => database.categorias,
    
    findCategoria: (categoria) => database.produtos.find(produto => produto.categoria === categoria),

    addCategoria: (categoria) => {
        const categoriaExist = categoriaRepository.findCategoria(categoria.categoria)
        if (categoriaExist) {
            Object.assign(categoriaExist, categoria);
            return categoriaExist;
        } else {
            database.categorias.push(categoria);
            return categoria;
        }
    },
 }