let rodas; // quantidade de rodas
let peso;
let pessoas;

alert("Quantas rodas tem o veículo?");
rodas = prompt();
alert("Qual o peso bruto em quilogramas?");
peso = prompt();
alert("Qual a quantidade de pessoas?")
pessoas = prompt();

if(rodas >= 2 && rodas <= 3){
    alert("Categoria A")
}
else if(rodas == 4 && pessoas <= 8 && peso <= 3500){
    alert("Categoria B")
}
else if(rodas >= 4 && peso >= 3500 && peso <= 6000){
    alert("Categoria C")
}
else if (rodas >= 4 && pessoas > 8){
    alert("Categoria D")
}
else if(rodas >= 4 && peso > 6000){
    alert("Categoria E")
}


