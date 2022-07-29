
class Livro {
    static lastKey = 0;
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
        this.Livro = ++Livro.lastKey;
        this.soma()
        /*    somaDeLivros++ */
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    anunciarEditora() {
        console.log(`Editora: ${this.editora}`)
    }
    soma() {
        console.log("A quantidade de objetos usando essa classe é igual a: " + this.Livro)
    }

}

const HA = new Livro("Homem Aranha", "Marvel", 200)
const SM = new Livro("SuperMan", "DC", 300)
const CA = new Livro("Capitão America", "Marvel", 200)