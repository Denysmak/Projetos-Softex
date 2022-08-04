package br.com.concessionária.pessoas;

public class clientes{
    private String nome;
    private long cpf;
    private int idade;
    

    public clientes(String nome, long cpf, int idade){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;

    }
    public String getNome(){
        return this.nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public long getCpf(){
        return this.cpf;
    }
    public void setCpf(long cpf){
        this.cpf = cpf;
    }
    public int getIdade(){
        return this.idade;
    }
    public void setIdade(int idade){
        this.idade = idade;
    }

}