import java.util.Scanner;

class Pessoa{
    private String nome;
    private int cargo;

    public Pessoa(String nome, int cargo){
        this.nome = nome;
        this.cargo = cargo;
    }
    public Pessoa(String nome){
        this.nome = nome;
    }
}

class Aluno extends Pessoa{
    public Aluno(String nome){
        super(nome);
    }
}

class Administrador extends Pessoa{
    public Administrador(String nome){
        super(nome);
    }
}

class Professor extends Pessoa{
    public Professor(String nome){
        super(nome);
    }
}

class Visitante extends Pessoa{
    public Visitante(String nome){
        super(nome);
    }
}

abstract class criandoUser{
    public abstract Pessoa addPessoa(String nome, String cargo);
}


public class FactoryMethod02 {
    public static void main (String[] args){
        Scanner input = new Scanner(System.in);
    }
    String nome = input.nextLine();
}
