// Arrays - métodos de arrays 

let arr1 = [7,14,21,28,35]
let arr2 = [0]

//1. Fatiamento: slice 

console.log(arr1.slice(0,2)) // o primeiro número é o início e o segundo número é o final, no entanto, o número impresso é o anterior ao número final
console.log(arr1.slice(2)) // ele entende como sendo o início e vai até o final do array 



//2. Adicionando elementos: push | unshift 

console.log('Antes de adicionar:', arr2)

arr2.push(10,20,30,40)

console.log('Depois de adicionar:', arr2)

console.clear()

console.log('Antes de adicionar com unshift:', arr2)

arr2.unshift(50)

console.log('Depois de adicionar com unshift:', arr2)

console.clear()



//3. Removendo elementos: pop | shift 

console.log('Antes de remover com o pop:', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop', arr2)
console.log('O elemento removido foi:', elementoRemovido)

console.log('Antes de remover com shift:', arr2)

arr2.shift()

console.log('Depois de remover com shift:', arr2)



//4. Concatenando arrays: concat

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()



//5. Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento = arr1.indexOf(14)

console.log(indiceDoElemento)

console.log(arr1)

let indiceDoElemento1 = arr1.indexOf(15)

console.log(indiceDoElemento1) // resultado será -1 pois esse número não está presente no array 

let arr3 = [1,2,3,3,5,3] // se tiver números repetidos, será mostrado o índice apenas do primeiro com o indexOf

console.log(arr3.lastIndexOf(3))

console.clear()



//6. Descobrindo a existência de um elemento: includes

console.log(arr1)

console.log(arr1.includes(13))



//7. Invertendo arrays: reverse 

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)