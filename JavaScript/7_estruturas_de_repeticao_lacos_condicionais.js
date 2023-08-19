// Estruturas de repetição - laços condicionais 
// sortear um numero -> obter um número do usuário -> número obtido é diferente do número desejado? 
// Sim -> volta para a digitação do número 
// Não -> Você acertou o número! 
// While - não sabemos quantas vezes essa repetição irá acontecer 

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number (input.question('Qual numero voce escolhe?'))

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente...')

    numero = Number (input.question('Qual numero voce escolhe?'))
}

console.log('Você acertou!!!')

 