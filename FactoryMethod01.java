// CLASSE BASE
class Veiculos{
    private String modelo;

    public Veiculos(String modelo){
        this.modelo = modelo;
    }

    public void mostrarDetalhes(){
        System.out.println("Modelo: " + modelo);
    }
}

//SUBCLASSES DE VEICULO
class Carro extends Veiculos{
    public Carro (String modelo){
        super(modelo);
    }
}

class Moto extends Veiculos{
    public Moto (String modelo){
        super(modelo);
    }
}

class Navio extends Veiculos{
    public Navio (String modelo){
        super(modelo);
    }
}

//FABRICA DAORA ABSTRACt
abstract class FabricaDaora{
    public abstract Veiculos criarVeiculo(String modelo);
}

//FABRICAS CONCRETAS
class FabricaDeCarros extends FabricaDaora{
    public Veiculos criarVeiculo(String modelo){
        return new Carro(modelo);
    }
}

class FabricaDeMotos extends FabricaDaora{
    public Veiculos criarVeiculo(String modelo){
        return new Moto(modelo);
    }
}

class FabricaDeNavios extends FabricaDaora{
    public Veiculos criarVeiculo(String modelo){
        return new Navio(modelo);
    }
}
//USANDO FABRICAS SLKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
public class FactoryMethod01 {
    public static void main (String[] args){
        FabricaDaora FabricaDeCarros = new FabricaDeCarros();
        Veiculos carro01 = FabricaDeCarros.criarVeiculo("Fusca");
        carro01.mostrarDetalhes();

        FabricaDaora FabricaDeMotos = new FabricaDeMotos();
        Veiculos moto01 = FabricaDeMotos.criarVeiculo("Rapida");
        moto01.mostrarDetalhes();

        FabricaDaora FabricaDeNavios = new FabricaDeNavios();
        Veiculos navio01 = FabricaDeNavios.criarVeiculo("Lancha");
        navio01.mostrarDetalhes();
    }
}
