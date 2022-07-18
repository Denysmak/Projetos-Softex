def calculadora(numero1, numero2, operacao):
    if(operacao == 1):
        soma = numero1 + numero2
        res = soma
    elif(operacao == 2):
        subt = numero1 - numero2
        res = subt
    elif(operacao == 3):
        multi = numero1 * numero2
        res = multi
    elif(operacao == 4):
        div = numero1 / numero2
        res = div
    else:
        res = 0
    return res    
    
    
    
    
print(calculadora(1,2,1))   