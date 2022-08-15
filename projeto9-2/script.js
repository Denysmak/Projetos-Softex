let banco = new Object();
banco.conta = 141414;
banco.saldo = 1000;
banco.tipoDeConta = "Salário"
banco.agencia = 12345
banco.buscarSaldo = () => {
    return banco.saldo
}
banco.deposito = (val) => {
    banco.saldo += val
}
banco.saque = (val) => {
    banco.saldo -= val
}
banco.numeroConta = () => {
    return banco.conta
}

