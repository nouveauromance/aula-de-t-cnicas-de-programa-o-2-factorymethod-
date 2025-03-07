# interface da fabrica concreta
class AbstractFactory:
    def criaProduto1(self):
       pass
    def criaProduto2(self):
       pass

# fabrica concreta A: cria produtos do tipo 1 e 2
class FabricaConcretaA(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoA1()
    
    def criaProdutoB(self):
        return ProdutoConcretoA2()
    
# fabrica concreta B: cria produtos do tipo 1 e 2
class FabricaConcretaB(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoB1()
    
    def criaProdutoB(self):
        return ProdutoConcretoB2()
    
# interface dos produtos tipo 1   
class produtoAbstrato1:
    def metodo(self):
        pass

# implementacao concreta do produto tipo 1 na fabrica A
class produtoConcretoA1(produtoAbstrato1):
    def metodo1(self):
        return "produto de tipo 1 de fabrica A"
    
# implementacao concreta do produto tipo 1 na fabrica B  
class produtoConcretoB1(produtoAbstrato1):
    def metodo1(self):
        return "produto de tipo 2 de fabrica B"
    
# interface dos produtos do tipo 2
class produtoAbstrato2:
    def metodo2(self):
        pass

# implementacao concreta do produto tipo 2 na fabrica A
class produtoConcretoA2(produtoAbstrato2):
    def metodo2(self):
        return "produto de tipo 2 de fabrica A"
    
# implementacao concreta do produto tipo 2 na fabrica B
class produtoConcretoB2(produtoAbstrato2):
    def metodo2(self):
        return "produto de tipo 2 de fabrica B"
    
# funcao para demonstracao do padrao abstract factory
def codCliente(fabrica):
    produtoA = fabrica.criaProduto1()
    produtoB = fabrica.criaProduto2()

    print(produtoA.metodo1())
    print(produtoB.metodo2())

# exemplo de uso fabrica A
fabrica1 = FabricaConcretaA()
codCliente(fabrica1)

# exemplo de uso fabrica B
fabrica2 = FabricaConcretaB()
codCliente(fabrica2)