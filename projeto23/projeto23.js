
class carro {
    #modelo
    #marca
    constructor() {
        this.#modelo = "O modelo ainda não foi informado";
        this.#marca = "A marca ainda não foi informada"
    }
    set setModelo(a) {
        this.#modelo = a
    }
    get getModelo() {
        return this.#modelo
    }
    set setMarca(b) {
        this.#marca = b
    }
    get getMarca() {
        return this.#marca
    }
}

let c1 = new carro()
c1.setModelo = "hb20"
c1.setMarca = "hyundai"

let c2 = new carro()
c2.setModelo = "palio"
c2.setMarca = "fiat"



