 // Arrays 

 // 1. Como criar um array? 

let arr = ['Raquel', 25, 1.63, true]

console.log(arr)

 // 2. Como acessar os elementos do array? 

 console.log ('Primeiro elemento:', arr[0]) // a contagem sempre começa do zero
 console.log ('Segundo elemento:', arr[1])
 console.log ('Terceiro elemento:', arr[2])
 console.log ('Quarto elemento:', arr[3])

 // 3. Como obter o tamanho do array? 

 console.log('Tamanho do array:', arr.length)

 // 4. Percorrendo arrays 

 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
 }

 for (let elemento of arr) {
    console.log(elemento)
 }

 console.clear()

 for (let indice in arr) {
    console.log(indice, arr[indice])
 }