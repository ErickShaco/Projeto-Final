 /** 
 * Banco de dados do sistema. 
 * Contém arrays de produtos e categorias para armazenamento de 
informações. 
 */
export const database = { 
    produtos: [
        {
        id: "1234567890123",
        nome: "Macarrao",
        categoria: "Massa",
        quantidade: "14",
        preco: "14,90"
    },
    {
        id: "1230987654321",
        nome: "Atum",
        categoria: "Enlatado",
        quantidade: "20",
        preco: "7,90"
    },
    {
        id: "1236549870321",
        nome: "Papel Higienico",
        categoria: "Higiene",
        quantidade: "10",
        preco: "9,90"
    }
],
    
    categorias: [
        {atum: "Enlatado",
         papelHigienico: "Higiene",
         macarrao: "Massa"

        }
    ] 
}