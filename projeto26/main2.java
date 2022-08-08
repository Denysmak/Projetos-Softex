package projeto26;

// import Java.io.*;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import java.io.FileInputStream;
/**
 * projeto26
 */
public class main2 {

    public static void main(String[] args) throws FileNotFoundException, IOException, ClassNotFoundException {
       
       
        pessoa pessoa1 = new pessoa();
        pessoa1.setNome("Denys");
        pessoa1.setIdade(20);
        System.out.println("O nome dessa pessoa é " + pessoa1.nome + ", e ela tem " + pessoa1.getIdade() + " anos");

        pessoa pessoa2 = new pessoa();
        pessoa2.setNome("Marcos");
        pessoa2.setIdade(25);
        System.out.println("O nome dessa pessoa é " + pessoa2.nome + ", e ela tem " + pessoa2.getIdade() + " anos");
    
        // serializar o objeto pessoa1
        FileOutputStream fos = new FileOutputStream("./arquivo.bin");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(pessoa1);
        oos.close();

        // deserializar
        ObjectInputStream obj = new ObjectInputStream(new FileInputStream("./arquivo.bin"));
        pessoa pessoa1D = (pessoa) obj.readObject();
        obj.close();
        System.out.println(pessoa1D.getIdade());
        
        

    
    }
}