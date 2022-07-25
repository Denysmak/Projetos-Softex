import pandas as pd

df = pd.read_csv("TabelaProjeto19.csv")
media = (df["nota_1"] + df["nota_2"])/2
df["media"] = media

#df["situacao"] = ""
df.loc[(df["media"] < 7) | (df["faltas"] > 5), "situacao"]= "Reprovado"
df.loc[(df["faltas"] < 5) & (df["media"] >= 7),  "situacao"]= "Aprovado"
print(df)
print("O maior numero de faltas foi: " + str(df["faltas"].max()))
print("A média geral das notas foi: " + str(df["media"].mean()))
print("A maior média foi: " + str(df["media"].max()))


