let primeiroValor = prompt("Escreva o valor 1");
let operador = prompt("Escolha o operador");
let segundoValor = prompt("escreva o valor 2");
let primeiro = parseInt(primeiroValor);
let segundo = parseInt(segundoValor);

function operadores(){
    if(operador == "+"){
        return primeiro + segundo
    }
    else if(operador == "-"){
        return primeiro - segundo
    }
    else if(operador == "/"){
        return `O resultado da divisão é ${primeiro/segundo} e o resto é igual a ${primeiro%segundo}`
    }
    else if(operador == "*"){
        return primeiro*segundo
    }
    else if(operador == "**"){
        return primeiro**segundo
    }
    else if(operador == "%"){
        return primeiro%segundo
    }
    else{
        return "você não inseriu um operador válido"
    }
}
alert(operadores());



