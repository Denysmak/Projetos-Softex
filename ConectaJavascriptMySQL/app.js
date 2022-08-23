const Sequelize = require('sequelize');
const connection = new Sequelize('new_schema', 'root', 'teste123', {host:'localhost',
            dialect:'mysql'});

var conexao = connection.authenticate().then(function(){
    console.log("Conexão com o MySQL foi estabelecida com sucesso");
}).catch(function(error){
    console.log(`Ocorreu o erro: ` + error);
});