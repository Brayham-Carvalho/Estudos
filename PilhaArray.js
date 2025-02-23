//Função Empilhar Elementos
var pilha =[];
var pilha2 = [];
function empilhar(vetor, elemento) {
  vetor.push(elemento);
  //alert(vetor);
}

function desempilhar(vetor) {
  return vetor.pop();
  
}

function mostrarUltimo(vetor) {
   
  return vetor[vetor.length - 1];
}

function estaVazio(vetor) {
  return vetor.length === 0;
}

empilhar(pilha, '5');
empilhar(pilha, '4');
empilhar(pilha, '3');
empilhar(pilha, '2');
empilhar(pilha, '1');


empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
empilhar(pilha2, desempilhar(pilha));
//console.log((pilha2));

//Implemente uma função em JavaScript que receba uma string como entrada e retorne a mesma string, mas com as letras invertidas. Utilize uma pilha implementada com arrays para inverter a ordem das letras.

//Exemplo:

//palavra = ["A", "M", "A", "C", "I", "A", "N", "T", "E"]

//invertida (após uso da função): ["E", "T", "N", "A", "I", "C", "A", "M", "A"]

function empilharLetra(vetor, letra) {
  vetor.push(letra);
  
}
function desempilharLetra(vetor) {
  return vetor.pop();
  
}
var palavra = [];
var palavraInvertida = [];

empilharLetra(palavra,'A');
empilharLetra(palavra,'M');
empilharLetra(palavra,'A');
empilharLetra(palavra,'C');
empilharLetra(palavra,'I');
empilharLetra(palavra,'A');
empilharLetra(palavra,'N');
empilharLetra(palavra,'T');
empilharLetra(palavra,'E');

console.log(palavra);

empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));
empilharLetra(palavraInvertida, desempilharLetra(palavra));

console.log(palavraInvertida);


