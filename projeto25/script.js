// Estruture três códigos, os quais devem conter uma função de manipulação de string que obtenha resultado.


alert("Escreva algo que você deseja transformar em minúsculo")
const maius = prompt() 

// transforma a string em minúscula
function maiusMinus(a){
    const minus = a.toLowerCase()
    alert("Essa palavra em minúsculo ficará assim: " + minus)
}
maiusMinus(maius)


alert("Escreva algo que voce deseja transformar em maiúsculo")
const minus = prompt()

//transforma a string em maiúscula 
function minusMaius(a) {
    const maius = a.toUpperCase()
    alert("Essa palavra em maiúsculo ficará assim: " + maius)
}
minusMaius(minus)


alert("Escreva uma palavra que você deseje saber o número de caracteres")
const palavra = prompt()

// diz o numero de caracteres na string
function tamanhoDaPalavra(a){
    let tamanho = a.length
    alert("Essa palavra tem " + tamanho + " caracteres")
}

tamanhoDaPalavra(palavra)

