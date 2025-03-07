// Interface da Fabrica Abstrata
class AbstractFactory {
    criaProduto1 (){};
    criaProduto2 (){};
}

// Fabrica Concreta A que vai criar Produto de tipo 1 e 2:
class FabricaConcretaA extends AbstractFactory {
    criaProduto1(){
        return new produtoConcretoA1();
    }

    criaProduto2(){
        return new produtoConcretoA2();
    }
}

// Fabrica Concreta B que vai criar produto de tipo 1 e 2:
class FabricaConcretaB extends AbstractFactory {
    criaProduto1(){
        return new produtoConcretoB1();
    }

    criaProduto2(){
        return new produtoConcretoB2();
    }
}

// Interface dos produtos do tipo 1 e 2:
class ProdutoAbstrato1{
    metodo1(){}
}

// Implementação concreta do produto do tipo 1:
class produtoConcretoA1 extends ProdutoAbstrato1 {
    metodo1(){
        return "Produto do tipo 1 da Fabrica A";
    }
}

// Implementação concreta do produto do tipo 1:
class produtoConcretoB1 extends ProdutoAbstrato1 {
    metodo2(){
        return "Produto do tipo 1 da Fabrica B";
    }
}

// Implementação concreta do produto do tipo 2:
class ProdutoAbstratoB{
    metodo2(){}
}

// Implementação concreta do produto do tipo 2 na fabrica A:
class produtoConcretoA2 extends ProdutoAbstrato2{
    metodo1(){
        return "Produto do tipo 1 da fabrica A";
    }
}

// Implementação concreta do produto do tipo 2 na fabrica B:
class produtoConcretoB2 extends ProdutoAbstrato2{
    metodo2(){
        return "Produto do tipo 2 da fabrica B";
    }
}

// Aplicacao - demonstracao do padrao Abstract Factory:
function codCliente(fabrica){
    const produtoA = fabrica.criaProduto1();
    const produtoB = fabrica.criaProduto2();

    console.log(produtoA.metodo1());
    console.log(produtoB.metodo2());
}

// Exemplo de uso - fabrica A:
const fabrica1 = new FabricaConcretaA();
codCliente(fabrica1);

// Exemplo de uso - fabrica B:
const fabrica2 = new FabricaConcretaB();
codCliente(fabrica2);
