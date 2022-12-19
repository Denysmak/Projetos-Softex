const express = require('express');
const router = express.Router();
const request = require('request');
const soap = require('soap');

router.get('/consulta/:cep', function(req, res, next){

    let cepRecebido = rep.params.cep;
    let url = 'https://apps.correios.com.br/SigepMasterJPA/AtenderClienteService/AtendeCliente?wsdl'

    soap.createClient(url, function (err, client) {
        client.consultaCEP({cep: cepRecebido}, function(err, result) {
            if(err) return console.log(err);
            res.send(result)
    })
})

})
