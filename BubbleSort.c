#include <stdio.h>

void bubbleSort(int vetor[], int tam){
int i, j, aux;
for(i = 0; j < tam -1; i++){

  for(j = 0; j < tam -1 -i; j++){
    if(vetor[j] > vetor[j+i]){
      aux = vetor[j];
      vetor[j] = vetor[j + 1];
      vetor[j + 1] = aux;
      
    }
  }
  
}
  
}

int main(void) {
  int vetor[10] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
  bubbleSort(vetor, 10);
  for(int i = 0; i < 10; i++){
    printf("[%d]", vetor[i]);
  }
  return 0;
}