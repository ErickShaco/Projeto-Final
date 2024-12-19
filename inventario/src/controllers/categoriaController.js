 /** 
 * Funções de lógica de negócio para categorias. 
 * - listarCategorias: Retorna todas as categorias. 
 * - cadastrarCategoria: Valida e adiciona uma nova categoria. 
 */
import { categoriaRepository } from "../repositories/categoriaRepository.js";


export const categoriaController = {


    cadastrarCategoria: (categoria) => categoriaRepository.addCategoria(categoria),


    listarCategorias: () => categoriaRepository.getCategorias()
}

