import br.com.concessionária.pessoas.*;
import br.com.concessionária.produto.*;

/**
 * main
 */
public class main {

    public static void main(String[] args) {
        
       carros hb20 = new carros("hb20", "hyundai", 2021);

       clientes joao = new clientes("João", 1455762484, 25);
        
        System.out.print("O nome do cliente é: " + joao.getNome());
        System.out.print("\nA idade do cliente é: " + joao.getIdade());
        System.out.print("\nO cpf do cliente é: " + joao.getCpf());
        System.out.print("\n");
        System.out.print("O modelo do carro é: " + hb20.getModelo());
        System.out.print("\nA marca do carro é: " + hb20.getMarca());
        System.out.print("\nO ano do carro é: " + hb20.getAno());
    }
}