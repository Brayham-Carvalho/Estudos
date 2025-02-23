//Classe que irá cirar um novo nó

class No{
  constructor(valor){
    this.valor = valor;
    this.proximo = null;
  }
}

//Criar a Fila

class Fila{
  constructor(){
    this.inicio = null;
    this.fim = null;
    this.tamanho = 0;
  }

  //Função que irá adicionar elementos (nós) na fila
  enfileirar(valor) {
    const no = new No(valor);
    if(this.inicio === null) {
      this.inicio = no;
      this.fim = no;
      no.proximo = no;
      
    } else {
      no.proximo = this.inicio;
      this.fim.proximo = no;
      this.fim = no;
    }
    this.tamanho++;
  }

  //Função que irá remover elementos (nós) da fila

  desenfileirar(){
    if(this.inicio === null){
      return null;
    } 
      const valor = this.inicio.valor;

    if(this.tamanho === 1) {
      this.inicio = null;
      this.fim = null;
    } else {
      this.inicio = this.inicio.proximo;
      this.fim.proximo = this.inicio;

    }

    this.tamanho--;
    return valor;
  }

  //Função exibir tamanho

  obterTamanho(){
    return this.tamanho;
  }

  //Função está vazia

  estaVazia() {
    return this.tamanho === 0;
  }

  //Função exibir começo da fila
  exibirInicio(){
    if (this.inicio){
     return this.inicio.valor;
    } else {
      return null;
    }
    //return this.inicio ? this.inicio.valor : null;
  }
}


//Testando a Fila criada

const fila = new Fila();
console.log(fila.estaVazia());

fila.enfileirar('Carlos');
fila.enfileirar('Brayham');
fila.enfileirar('Josemayra');
fila.enfileirar('Maria');
fila.enfileirar('Marta');
fila.enfileirar('Joana');
fila.enfileirar('Maitê');

console.log(fila.obterTamanho());
console.log(fila.exibirInicio());
fila.desenfileirar();
console.log(fila.exibirInicio());
fila.desenfileirar();
console.log(fila.exibirInicio());
fila.desenfileirar();
console.log(fila.exibirInicio());
fila.desenfileirar();
console.log(fila.estaVazia());
console.log(fila.obterTamanho());