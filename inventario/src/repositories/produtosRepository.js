 /** 
 * Funções para manipulação dos dados de produtos. 
 * - getProdutos////: Retorna todos os produtos cadastrados. 
 * - addProduto: Adiciona um novo produto ao banco de dados. 
 * - findProduto////: Busca um produto pelo ID. 
 * - atualizarQuantidade: Atualiza a quantidade de um produto existente. 
 * - removerProduto///: Remove um produto pelo ID. 
 */

 import { database } from "./database";

 export const produtosRepository = {
     // Listar Todos os Produtos
     getProdutos: (produtos) => database.produtos,
     // Buscar produto por id
     findProduto: (id) => {
         database.produtos.find(produto => produto.id === id)
     },
     // Salvar produto
     save:(produtos) => {
         const isprodExists = produtosRepository.findProduto(produtos.id)
         if (isprodExists) {
             Object.assign(isprodExists, produtos)
             return isprodExists
         } else {
             database.produtos.push(produtos)
             return usuario
         }
     },
 
     // Excluir produto
     remove: (id) => {
         const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf)
         database.usuarios.splice(index, 1)
     }
 
 
 }