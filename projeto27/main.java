import java.lang.*;
public class main {

    public static void main(String[] args) {
       try{ 
        System.out.println(4/0);
       }
       catch(Exception teste){
        System.out.println("ocorreu uma exceção: " + teste.getMessage());
       }
    }
}