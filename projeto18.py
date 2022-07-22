


i = 0
candidato_X = 0
candidato_Y = 0
candidato_Z = 0
branco = 0
nulo = 0
vencedor = ''
def quantidade_Votos():
     if(int(branco) >= 2):
        print("a maior quantidade de votos foram brancos") 
     elif(int(nulo) >= 2):
        print("a maior quantidade de votos foi nula")   
def votar():
    print("Você deseja finalizar a votação?")
    res = input()
    if(res == "sim") or (res == "Sim") or (res == "SIM"):
       global i 
       print("votando..")
       i = i + 1
def candidatoVencedor():
    if(candidato_X > candidato_Y) and (candidato_X > candidato_Z):
        print("O candidato X é o vencedor")           
    elif(candidato_Y > candidato_X) and (candidato_Y > candidato_Z):
        print("O candidato Y é o vencedor")
    elif(candidato_Z > candidato_Y) and (candidato_Z > candidato_X): 
        print("O candidato Z é o vencedor")
    elif(candidato_X == candidato_Y == candidato_Z):
        print("Não há vencedores")
    quantidade_Votos()


    

while(i < 3):
    print("Eleja o seu candidato:")
    print("candidato_X => 889")
    print("candidato_Y => 847")
    print("candidato_Z => 515")
    print("branco => 0")
    print("Escreva o numero do seu candidato:")

    inpot = input()
    if(inpot == "889"):
        candidato_X = int(candidato_X + 1)
        votar()
    elif(inpot == "847"):
        candidato_Y = int(candidato_Y + 1)
        votar()
    elif(inpot == "515"):
        candidato_Z = int(candidato_Z + 1)
        votar()
    elif(inpot == "0"):
        branco = int(branco + 1)
        votar()
    elif(inpot.isnumeric() == False):
        print("Vote novamente")    
    else:
        nulo = nulo + 1
        votar()
candidatoVencedor()        


print("O numero de votos do candidato_X foi igual a: " + str(candidato_X))
print("O numero de votos do candidato_Y foi igual a: " + str(candidato_Y))
print("O numero de votos do candidato_Z foi igual a: " + str(candidato_Z))        
print("O numero de votos brancos foi igual a: " + str(branco))
print("O numero de votos nulos foi igual a: " + str(nulo + branco))

        
   
