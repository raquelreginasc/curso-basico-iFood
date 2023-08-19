// Funções - é um trecho do código que pode ser reutilizado 

//1. Definição da função 

function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript!')
}

saudacao()

console.clear()


//2. Como enviar parâmetros para as funções?

function saudacao(nome, curso = 'JavaScript') {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso de ${curso}`)
}

saudacao('Raquel', 'programação')
saudacao('Regina')

console.clear()



//3. Retorno da função - todo código depois da função return não é usado, exceto o último exemplo (usando if)

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10,20)

console.log(resultado)


function maiorDoQue50(numero) {
    if (numero > 50) {
        return true 
    }
}

return false 