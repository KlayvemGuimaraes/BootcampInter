    // Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

   // Entrada
   // Você receberá um número onde: 
   // Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
   // Se o número for apenas múltiplo de 3 -> "Fizz" ; 
    // Se o número for apenas múltiplo de 5 -> "Buzz"; 
    // Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

    // Saída
   // Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:

let numero = parseInt(gets())
fizzBuzz(numero)

function fizzBuzz (numb) {
  if (numb % 3 === 0 && numb % 5 === 0)
      print("FizzBuzz");
    else if (numb % 3 === 0)
      print("Fizz");
    else if (numb % 5 === 0)
      print("Buzz")
    else 
    print(numb);
}