erro = False
def nomeIdade():    
    print("Qual o seu nome completo?")
    nome = input()
    print("Em qual ano você nasceu?")
    ano = int(input())
    if(nome == ""):
        raise Exception('Você não colocou um nome válido')
    elif(ano < 1922) or (ano > 2021):
        raise Exception('O ano de nascimento deve ser entre 1922 e 2021')
    else:
        erro = True
        print(nome + " você faz " + str(2022 - ano) + " anos em 2022")    

while(erro == False):
    try:
        nomeIdade()
        erro = True        
    except Exception as e:
        print(e)
        erro = False
