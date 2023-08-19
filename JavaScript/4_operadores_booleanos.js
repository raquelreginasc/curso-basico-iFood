//- Operadores booleanos

//Igualdade: == (compara apenas o conteúdo) (ou === usado para comparar o tipo - utilizar sempre para evitar bugs no código) 
///Desigualdade: != (ou!== utilizar para evitar erros)
//Maior que: >
//Maior ou igual: >=
//Menor que: <
//Menor ou igual: <=

const numero = 10;

console.log(numero === 10)
console.log(numero > 20)


//Conjuções lógicas 
//AND => && - eu tenho que ter 18 anos E ter CNH para poder dirigir 

let idade = 25;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir?', possoDirigir)

//OR => || 
idade = 40;

const votoFacultativo = idade < 18 || idade >= 70

console.log('O voto é facultativo?', votoFacultativo)

//NOT => ! - inverter o resultado do booleano

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso)
