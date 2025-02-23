#include <stdio.h>

void selectionSort(vetor[], tam) {
  int i, j, aux, minIndex;
  for (i = 0; i < tam - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < tam; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }
    aux = vetor[minIndex];
    vetor[minIndex] = vetor[i];
    vetor[i] = aux;
  }
}

int main(void) { 
  int vetor[10] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
  selectionSort(vetor, 10);
  for(int i=0;i<10;i++){
    printf("[%d]", vetor[i]);
  }
  return 0; 
  
  }