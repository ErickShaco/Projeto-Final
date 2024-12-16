 /** 
 * Funções de lógica de negócio para produtos. 
 * - listarProdutos: Retorna todos os produtos. 
 * - cadastrarProduto: Valida e adiciona um novo produto. 
 * - atualizarProduto: Valida e atualiza a quantidade de um produto 
existente. 
 * - removerProduto: Valida e remove um produto. 
 */

import { produtosRepository } from "../repositories/produtosRepository.js";


const produtosController = {


    save: (produtos) => produtosRepository.save(produtos),

    
    remove: (id) => produtosRepository.remove(id),

    
    getProdutos: () => produtosRepository.getProdutos(),

   
    findById: (id) => produtosRepository.findById(id)

}

export default produtosController