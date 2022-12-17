//Para create usamos o HTTP POST
//para read usamos o HTTP GET
//Para update usamos o HTTP PUT
//Para delete usamos o HTTP DELETE

const livraria = [
    {name: 'livro1', autor: 'Denys', ISBN:'?'},
  {name: 'livro2', autor: 'Makene', ISBN:'?'},
   {name: 'livro3', autor: 'Maia', ISBN:'?'},
    {name: 'livro4', autor: 'Silva', ISBN:'?'},
];

const criar = (objeto) => {
	livraria.push(objeto);
}

const ler = (a) => {
  return livraria
}
const deletar = (livro) => {
	for(i in livraria){
   if(livraria[i].name == livro){
   	livraria.splice(i, 1)
   }
  }
	
}
