#include <stdio.h>

void inserctionSort(int vetor[], int tam){
  int i, j, atual;
  for(i = 1; i < tam; i++){
    atual = vetor[i];
    j = i - 1;
    while(j >= 0 && vetor[j] > atual){
       vetor[j+1] = vetor[j];
      j = j -1;
    }
    vetor[j + 1] = atual;
  }
}


int main(void) {
  int vetor[10] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
  inserctionSort(vetor, 10);
  for(int i = 0; i < 10; i++){
    printf("[%d]", vetor[i]);
  }
  
  return 0;
}