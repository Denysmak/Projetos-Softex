
def calculadora():
    operacao = ""
    while(operacao != 0):
        print("1: Soma")
        print("2: Subtração")
        print("3: Multiplicação")
        print("4: Divisão")
        print("0: Sair")
        print("Insira qual operação você deseja realizar")
        operacao = int(input())
        
        if(operacao == 1):
            print("Você escolheu soma")
            print("Insira o primeiro numero")
            numero1 = int(input())
            print("Insira o segundo numero")
            numero2 = int(input())
            soma = numero1 + numero2
            print("o resultado é igual a " + str(soma))
        elif(operacao == 2):
            print("Você escolheu subtração")
            print("Insira o primeiro numero")
            numero1 = int(input())
            print("Insira o segundo numero")
            numero2 = int(input())
            subtracao = numero1 - numero2
            print("o resultado é igual a " + str(subtracao))
        elif(operacao == 3):
            print("Você escolheu multiplicação")
            print("Insira o primeiro numero")
            numero1 = int(input())
            print("Insira o segundo numero")
            numero2 = int(input())
            multiplicacao = numero1 * numero2
            print("o resultado é igual a " + str(multiplicacao))
        elif(operacao == 4):
            print("Você escolheu divisão")
            print("Insira o primeiro numero")
            numero1 = int(input())
            print("Insira o segundo numero")
            numero2 = int(input())
            divisao = numero1 / numero2
            print("o resultado é igual a " + str(divisao))
