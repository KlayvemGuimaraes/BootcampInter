   // Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

   // Entrada
   // A Entrada será composta por um número inteiro, N. 

    // Saída
    // Será  impresso o somatório de N até 0, como no exemplo a baixo: 

let n = parseInt(gets());

function somatorio(n){
if ( n > 0){
  return n + somatorio(n -1)
  }else{
    return 0
  }
}
print (somatorio(n))