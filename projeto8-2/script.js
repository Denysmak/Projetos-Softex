/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá - lo.*/



// imprime os valores iniciais do plano de saúde
function valores(){
    return "Se você tiver menos que 10 anos ou mais de 40 o valor será igual a 400, se você tiver entre 10 e 40 o valor será 200\nSe o valor for pago semestralmente há um desconto\nSe o valor for pago anualmente há um desconto"


}

//o valor vai mudar de acordo com a idade
function valorInd(nome, idade){
    globalThis.valor;
    if(idade >= 10 && idade <= 40){
        valor = 200;
    }
    else{
        valor = 400;
    }
    return nome + ", o seu plano de saúde vai ser " + valor + " reais sem os descontos"
}

// dependendo do modo de pagamento e se o pagamento será antecipado haverão descontos
let pagamento = (pagamento, modo) => {
    console.log('Escreva "a" para pagamento anualmente\nEscreva "s" para semestralmente\nEscreva d para modo de pagamento em dinheiro\nEscreva c para cartão')
    if(pagamento == "s" && modo =="d"){
        valor -= (valor * 5/100)
    }
    else if(pagamento == "s" && modo == "c") {
        valor -= (valor * 3 / 100)
    }
    else if (pagamento == "a" && modo == "c") {
        valor -= (valor * 8 / 100)
    }
    else if(pagamento == "a" && modo =="d"){
        valor -= (valor * 10 / 100)
    }
    else{
        return "Escolha uma forma válida de pagamento"
    }
    return "O valor é igual a " + valor
}

console.log(valores())
console.log(valorInd("Denys", 9));
console.log(pagamento("a","c"))



