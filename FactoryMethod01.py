#CLASSE BASE
class Veiculo:
    def _init_(self, modelo):
        self.modelo = modelo
    
    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

#SUBCLASSE
class Carro(Veiculo):
    def _init_(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def _init_(self, modelo):
        super()._init_(modelo)

class Navio(Veiculo):
    def _init_(self, modelo):
        super()._init_(modelo)

#FABRICA DAORA ABSTRACT
class FabricaDaora:
    def criarVeiculos(self, modelo):
        raise NotImplementedError("O metodos criarVeiculo deve ser implementado pela subclasse")

#FABRICAS CONCRETAS
class FabricaDeCarros(FabricaDaora):
    def criarVeiculos(self, modelo):
        return Carro(modelo)

class FabricaDeMotos(FabricaDaora):
    def criarVeiculos(self, modelo):
        return Moto(modelo)

class FabricaDeNavios(FabricaDaora):
    def criarVeiculos(self, modelo):
        return Navio(modelo)
    
#USO DE CLASSES
FabricaDeCarros = FabricaDeCarros()
carro01 = FabricaDeCarros.criarVeiculos("Monza")
carro01.mostrarDetalhes()

FabricaDeMotos = FabricaDeMotos()
moto01 = FabricaDeMotos.criarVeiculos("Veloz")
moto01.mostrarDetalhes()

FabricaDeNavios = FabricaDeNavios()
navio01 = FabricaDeNavios.criarVeiculos("De Agua")
navio01.mostrarDetalhes()