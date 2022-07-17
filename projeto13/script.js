let nome;
let nota1;
let nota2;
let faltas;
let media;
alert("Qual o nome do aluno?")
nome = prompt()
alert("Qual foi primeira nota do aluno?")
nota1 = parseInt(prompt())
alert("Qual foi a segunda nota do aluno?")
nota2 = parseInt(prompt())
alert("Qual o numero de faltas do aluno?")
faltas = prompt()

media = (nota1 + nota2)/2

if(media < 7 || faltas > 3){
    alert(nome + " está reprovado")
}
else{
    alert(nome +" está aprovado")
}
