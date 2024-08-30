const  readlineSync  = require('readline-sync')

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
const categorias = []

/* Funções */
function pular(){
    let pular = readlineSync.question("\nAperte ENTER para seguir...")
}
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
        console.log(produto.id+' - Nome: '+produto.nome+' | Categoria: '+produto.categoria+' | Preço: '+produto.preco)
    }
}

function listaID(id){
    for(let produto of produtos){
        if(id === produto.id){
            console.log(produto.id+' - Nome: '+produto.nome+' | Categoria: '+produto.categoria+' | Preço: '+produto.preco)
        }
    }
}

function atualizaProduto(id){
    for(let produto of produtos){
        if(id === produto.id){
            console.log(produto.id+' - Nome: '+produto.nome+' | Categoria: '+produto.categoria+' | Preço: '+produto.preco)
        }
    }

}

function removerProduto(id){
    for(let produto of produtos){
        if(id === produto.id){
            produtos.splice(id,1)
            console.clear()
            console.log('Produto '+produto.nome+' removido com sucesso!\n')
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

let op = 0
while(op != 9){
    console.clear()
    console.log("---------------------------------------")
    console.log("1 - Adicionar produtos")
    console.log("2 - Listar produtos")
    console.log("3 - Procurar produtos por ID")
    console.log("4 - Atualizar produtos")
    console.log("5 - Deletar produtos")
    console.log("6 - Pesquisar produtos por categoria")
    console.log("7 - Pesquisar produtos por nome")
    console.log("9 - Sair")
    console.log("---------------------------------------")
    op = readlineSync.questionInt("Selecione o que deseja: ")
    console.clear()
    switch(op){
        case 1:
            console.log('----------------------')
            console.log('Adicionando Produtos')
            let nome = readlineSync.question("\nNome: ")
            let categoria = readlineSync.question('Categoria: ')
            let preco = readlineSync.questionInt('Preco: ')
            addProduct(nome, categoria, preco)
            break
        
        case 2:
            console.log('----------------------')
            console.log('Lista dos Produtos')
            console.log('----------------------')
            listaProducts()
            pular()
            break
        
        case 3:
            console.log('----------------------')
            console.log('Lista dos Produtos')
            console.log('----------------------')
            for(let produto of produtos){
                console.log(produto.id+' - '+produto.nome)
            }
            let id = readlineSync.questionInt('\nQual ID deseja visualizar: ')
            console.clear()
            listaID(id)
            pular()
            break
        
        case 4:
            console.log("Seçao em manutencao!")
            pular()
            break
        
        case 5:
            console.log('----------------------')
            console.log('Produtos')
            console.log('----------------------')
            for(let produto of produtos){
                console.log(produto.id+' - '+produto.nome)
            }
            let delet = readlineSync.questionInt('\nQual id do produto que deseja deletar: ')
            removerProduto(delet)
            pular()
            break
        
        case 6:
            /*console.log('----------------------')
            console.log('Categorias')
            console.log('----------------------')
            for(let produto of produtos){
                if(produto.categoria != categorias){
                    categorias.push(produto.categoria)
                }
            }
            for(let cat of categoria){
                console.log(cat)
            }
            catpesquisa = readlineSync.question('\nQual a categoria do produto que deseja visualizar: ')
            pesquisaCategoria(catpesquisa)
            */
            
            




    }

    
}





//pesquisaNome("Verde")
//pesquisaCategoria("Ganja")
//removerProduto(0)
//listaProducts()
//listaID(0)