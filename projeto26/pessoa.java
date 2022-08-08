package projeto26;

import java.io.Serializable;

public class pessoa implements Serializable {
    // Atributos
    String nome;
    int idade;
    // Métodos
    public void setNome(String n){
        this.nome = n;
    }
    public String getNome(){
        return this.nome;
    }
    
    public void setIdade(int i) {
        this.idade = i;
    }

    public int getIdade() {
        return this.idade;
    }

   

}
