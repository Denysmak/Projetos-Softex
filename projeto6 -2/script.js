/* Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.*/

function passouReprovou(){
    let nota1 = parseInt(prompt("Escreva a sua primeira nota"));
    let nota2 = parseInt(prompt("Escreva a sua segunda nota"));
    let nota3 = parseInt(prompt("Escreva a sua terceira nota"));

    let media = (nota1 + nota2 + nota3)/3
    
    let resultado = media > 6 ? "Você está aprovado" : "Você está reprovado" 
    alert(resultado)
}
function proxProv(){
    let nota1 = parseInt(prompt("Escreva a sua primeira nota"));
    let nota2 = parseInt(prompt("Escreva a sua segunda nota"));
    let nota3 = 21 - (nota1 + nota2)
    if(nota3 > 10){
        alert("Você está reprovado");
    } 
    else{
        alert("Você tem que tirar " + nota3 + " na próxima prova para ser aprovado")
    }
}

passouReprovou();
proxProv();