// 1. Declare uma variável de nome person
var person

// 2. Que tipo de dado é a variável acima?
console.log(typeof person);

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: string
        * age: Number (Integer)
        * weigtht: Number (float)
        * isAdmin: Boolean
        * isAMan: Boolean
*/

person = {
    name: "Moacir",
    age: 30,
    weigtht: 69,
    isAdmin: false,
    isAMan: true
}

/*
    4. A variável person abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
    4.2 Mostre no console a seguinte mensagem:
        O humano <name> tem o peso <weight> kg.
*/

let human = {
    name: "Moacir",
    age: 30,
    weigtht: 69,
    isAdmin: false,
    isAMan: true
}

console.log(human);
console.log(`O humano ${human.name} tem o peso ${human.weigth}`);

// 5. Declare uma variável do tipo array, de nome humans e atribuia a ela nenhum valor, ou seja, somente o array vazio.

let humans = []

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto human da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado inserindo ele no array)

humans = [
    human
]

console.log(humans);

// 7. Coloque no console o valor da posição zero do array acima

console.log(humans[0].name);

// 8, Crie um novo objeto human e coloque na posição 1 do array humans

let newHuman = {
    name: "Luan Monteiro",
    age: 30,
    weigtht: 90.1,
    isAdmin: true,
    isAMan: true
}

console.log(newHuman);

humans = [
    human,
    newHuman
]

console.log(humans);

// 9 Sem rodar o código responda o resultado da saída abaixo:

// a) 
console.log(a);
var a = 1
// Resposta: Undefined

// b)
let = a
console.log(a);
{
    let a = 2
    console.log(a);
}
console.log(a);
// Resposta: Undefined, 2, Undefined

// c)
let b = 3
console.log(b);
{
    let b = 3
    console.log(b);
}
console.log(b);
// Resposta: 3, 3, 3

// d)
const c = 10
{
    console.log(c);
    const c = 20
    console.log(c);
}
// Resposta: Erro
