let  SomaDePaginas = 0
class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
        SomaDePaginas += paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    anunciarEditora(){
        console.log(`Editora: ${this.editora}`)
    }
}

const HA = new Livro("Homem Aranha", "Marvel", 200)
const SM = new Livro("SuperMan", "DC", 300)
const CA = new Livro("Capitão America", "Marvel", 200)

console.log("O numero total de paginas de todos os livros é igual a " + SomaDePaginas)