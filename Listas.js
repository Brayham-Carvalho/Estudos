var numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var numeros2 = [19, 18, 17, 16, 15, 14, 13, 12, 11, 10];

// Operações de remoção

//Removendo pelo inicio
  numeros.shift();

//Removendo pelo fim
  numeros.pop();

//Removendo de uma posição específica
 numeros.splice(3, 1);

//Operações de inserção

  //Inserção no inicio
    numeros.unshift(10);

  //Inssrção no final
    numeros.push(0);

  //Inserção numa posição específica 
    numeros.splice(4, 0, 0, 0, 0);

  //Ordenando em ordem crescente
    numeros.sort();
    
  //Juntando 2 listas
   var listaCompleta =  numeros2.concat(numeros);

  //Quebrando uma lista e gerando uma menor
    var subLista = numeros.slice(2, 6);

  //Descobrindo a posição de um elemento na lista
    var posicao = numeros.indexOf(5);
  //Removendo um elemento a partir de uma posição descoberta
    numeros.splice(posicao, 1);


  //Buscando um valor a partir de uma regra
  var maiorQueCinco = numeros.find(
    function(numero) {
      return numero > 5;
    }
  );

console.log(maiorQueCinco);
//Escreva um programa em JavaScript que receba uma lista de tarefas como entrada e as execute uma por uma, seguindo a ordem de chegada. Utilize uma fila implementada com arrays para armazenar as tarefas.
var tarefas = [];

tarefas.push('tarefa 01');
tarefas.push('tarefa 02');
tarefas.push('tarefa 03');
tarefas.push('tarefa 04');

console.log(tarefas);
for( var i = 0; i = tarefas.length ; i++) {
  var tarefaRealizada = tarefas.shift();

  console.log('Tarefa realizada:' + tarefaRealizada); 
}



//Escreva um programa em JavaScript que receba uma lista de nomes desordenados e realize as seguintes ações:

//Ordene a lista em ordem alfabética.
//Verifique se o nome "João" está presente na lista.
//Caso o nome "João" esteja presente, remova-o da lista utilizando a função splice.
//Exiba a lista resultante após a remoção ou uma mensagem indicando que o nome "João" não estava presente na lista.

var listaNomes = ['Pedro', 'Marcelo', 'Ailson', 'Mateus', 'João'];

console.log(listaNomes);

listaNomes.sort();
console.log(listaNomes);

var procurarNome = listaNomes.find(function(nome) {
  return nome === 'João';
});

if (procurarNome) {
  console.log('Encontrado e removido');
} else {
  console.log('Não encontrado');
}
 var posicaoNome = listaNomes.indexOf('João');
listaNomes.splice(posicaoNome, 1);
console.log(listaNomes);

var tarefas = [];

tarefas.push('tarefa 01');
tarefas.push('tarefa 02');
tarefas.push('tarefa 03');
tarefas.push('tarefa 04');

console.log(tarefas);
for( var i = 0; i = tarefas.length ; i++) {
var tarefaRealizada = tarefas.shift();

console.log('Tarefa realizada:' + tarefaRealizada);
}