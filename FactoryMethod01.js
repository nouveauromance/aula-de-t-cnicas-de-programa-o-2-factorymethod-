//CLASSE BASE
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }
    MostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

//SUBCLASSES DE VEICULO

class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Navio extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

//FABRICA DAORA ABSTRACT
class FabricaDaora{
    criarVeiculo(modelo){
        throw new Error(`O metodos criarVeiculo deve ser implementado pela subclasse`)
    }
}

//FABRICAS CONCRETAS
class FabricaCarros extends FabricaDaora{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

class FabricaMoto extends FabricaDaora{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

class FabricaNavio extends FabricaDaora{
    criarVeiculo(modelo){
        return new Navio(modelo);
    }
}


//USANDO FABRICAS SLKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
const fabricaDeCarros = new FabricaCarros();
const carro01 = fabricaDeCarros.criarVeiculo('Lancer');
carro01.MostrarDetalhes();

const fabricaDeMotos = new FabricaMoto();
const moto01 = fabricaDeMotos.criarVeiculo('XJ7');
moto01.MostrarDetalhes();

const fabricaDeNavios = new FabricaNavio();
const navio01 = fabricaDeNavios.criarVeiculo('Kayke');
navio01.MostrarDetalhes();

