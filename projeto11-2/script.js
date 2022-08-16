const carro = new Object();
carro.modelo = "onix";
carro.marca = "chevrolet";
carro.ano = 2022;
carro.peças = ["Cilindro de roda traseira", "Sensor de temperatura", "Termo Interruptor do radiador", "Servofreio", " Interruptor de pressão do óleo"];

// lista as propriedades do objeto
carro.metodoPropriedades = () => {
    for (const e in carro) {
        if (typeof carro[e] == 'function') {
        }
        else {
            console.log(e + ": " + carro[e])
        }
    }
    console.log("\n")
}

// lista os elementos do array
carro.metodoElementos = () => {
    for(const e of carro.peças){
        console.log(e + ", ")
    }
}

carro.metodoPropriedades();
carro.metodoElementos();


