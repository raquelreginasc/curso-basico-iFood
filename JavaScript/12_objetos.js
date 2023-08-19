// Objetos 

//1. Como criar um obejto no JS? 

let pessoa = {
    nome: 'Raquel',
    'ano-de-nascimento': '1997',
    idade: 25
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['ano-de-nascimento'])
console.log(pessoa.idade)



//2. Como adicionar um par chave-valor?

pessoa.altura = 1.63
console.log(pessoa)



//3. Como remover um par chave-valor? 

delete pessoa.altura
console.log(pessoa)



//4. Como percorrer? 

for (let chave in pessoa){
    console.log(chave)
}