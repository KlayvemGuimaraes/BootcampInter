    //O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

   // Entrada
   // A entrada consiste em um valor inteiro positivo N.

   // Saída
   // A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

let n = parseInt(gets()); 

var clumsy = function (n, m = n % 4) {
    if (n < 3) return n;

    if (n === 3 || n === 4) {
        return n + 3;
    } else if (!m) {
        return n + 1;
    } else if (m === 1 || m === 2) {
        return n + 2;
    }
    return n - 1;
};

print(clumsy(n))