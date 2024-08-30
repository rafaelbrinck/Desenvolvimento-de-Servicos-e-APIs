/* Classe */
class Produto{
    constructor(id, nome, categoria, preco){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.preco = preco
    }
}


/* Lista */
const produtos = []


function addProduct(nome, categoria, preco){
    let id = 0
    if(produtos.length == 0){
        let produto = new Produto(id, nome, categoria, preco)
        produtos.push(produto)
    }else{
        id = produtos.length
        let produto = new Produto(id, nome, categoria, preco)
        produtos.push(produto)
        id++
    }
}

function listaProducts(){
    for(let produto of produtos){
        console.table(produto)
    }
}

function listaID(id){
    for(i=0; i<produtos.length; i++){
        if(id === i){
            console.table(produtos[i])
        }
    }
}

function removerProduto(id){
    for(i=0; i<produtos.length; i++){
        if(id === i){
            produtos.splice(id,1)
        }
    }
}

function pesquisaCategoria(categoria){
    for(let produto of produtos){
        if(categoria == produto.categoria){
            console.log(produto)
        }
    }
}

function pesquisaNome(nome){
    for(let produto of produtos){
        if(nome == produto.nome){
            console.table(produto)
        }
    }
}

addProduct("Verde", "Ganja", 4)
addProduct("Coca", "Pó", 20)
addProduct("Crack", "Pedra", 30)
addProduct("Heroina", "Droga", 10)




//pesquisaNome("Verde")
//pesquisaCategoria("Ganja")
//removerProduto(0)
//listaProducts()
//listaID(0)