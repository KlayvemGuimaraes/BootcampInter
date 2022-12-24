   // Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

   // Entrada
   // A entrada consiste em um número inteiro n, representando o valor total. 

  //  Saída
   // A saída consiste em retornar o menor número de números quadrados perfeitos. 

let n = parseInt(gets()); 

const numSquares = n => {
  if (n < 4) return n;
  
  let best = Infinity;
  
  for (let x = 2; x <= Math.floor(Math.sqrt(n)); ++x) {
      let k = Math.floor(n / (x * x));
      best = Math.min(best, k + numSquares(n - k * x * x));
  }
  return best;
};
console.log(numSquares(n))