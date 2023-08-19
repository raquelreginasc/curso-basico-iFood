// Coersão (conversão) de tipos 

// 1. Coerção explícita (manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('15245'))
console.log(parseFloat('5656.44'))
console.log(parseInt('5565.55'))
console.log(Boolean(0)) //falso 
console.log(Boolean(1)) // diferente de zero é verdadeiro 

// 2. Coerção implícita (automática) - o próprio JS faz automaticamente 
console.log(10 + 1)
console.log (10 + '1') 

console.log (10 - 1)
console.log(10 - '1')

console.log (10 * 3)
console.log(10 * '3')

console.log(10 - 'aire') // NaN = Not a Number 

// 3. Outros exemplos - qual será a saída desses códigos? 

let n = 1 + "1" // vai ser transformado em texto, a string impresso será 11
n = n - 1 // vai transforma a strin para número 11 - 1 

console.log(n) // = 10 - número 

console.log(2 + 3 + 4 + "5") // vai transformar todos em texto
console.log( "5" + 2 + 3 + 4) // vai transformar todos em texto
console.log("10" - "4" - "3" - 2 + "5") // a subtração é transformada em número e adição é transformada em texto

