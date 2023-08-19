// Estrutura condicionais - estrutura de controle de fluxo, aquela linha de código só será rodada caso atenda determinada condição 

const idade = 20

if (idade >= 18){
    console.log('Você é maior de idade!')
} else {
    console.log('Você não é maior de idade!')
}


//Se media >= 7, aprovado
// Se media < 7 e media >= 5, recuperação
// Se media < 5, reprovado 

let media = 10

if (media >= 7){
    console.log('Aprovado(a)')
} else if (media < 7 && media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado(a)')
}