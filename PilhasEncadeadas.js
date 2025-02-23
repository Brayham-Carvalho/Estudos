//Criando Nós individuais.
class No{
  constructor(valor){
    this.valor = valor;
    this.anterior = null;
  }
}

//Definição da nossa pilha.

class pilha{
  constructor(){
    this.topo = null;
    this.tamanho = 0;
  }

  //Cirando a Função empilhar

  empilhar(valor) {
    let novoNo = new No(valor);
    novoNo.anterior = this.topo;
    this.topo = novoNo;
    this.tamanho++;
  }

  //Criando a função desempilhar.

  desempilhar(){
    if(this.tamanho === 0) {
      return null;
    } else {
      let valorDesempilhado = this.topo.valor;
      this.topo = this.topo.anterior;
      this.tamanho--;
      return valorDesempilhado;
    }
  }

  //Criando a função que mostra o topo

  topoDaPilha() {
    if(this.tamanho === 0) {
      return null;
    }
    return this.topo.valor;
  }

  //Função se a pilha está vazia
  estaVazia() {
    return this.tamanho === 0;
  }

  //Função que retorna o tamanho

  tamanhoDaPilha() {
    return this.tamanho;
  }
}


var pilha01 = new pilha();
pilha01.empilhar('Lusiadas');
pilha01.empilhar('Harry Potter');
pilha01.empilhar('O senhor dos Anéis');
pilha01.empilhar('Como fazer amigos e influenciar pessoas');

console.log(pilha01.topoDaPilha());

console.log(pilha01.desempilhar());

console.log(pilha01.topoDaPilha());

console.log(pilha01.estaVazia());

console.log(pilha01.tamanhoDaPilha());