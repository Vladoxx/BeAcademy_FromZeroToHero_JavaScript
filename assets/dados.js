// Type Conver

// Convertendo string para número e número para string
console.log(Number('9') + 24);
console.log(String(9) + ' Converteu diacho!!');

// Contar Caracteres
let oneWord = "Moacir" // 6 letras
console.log(oneWord.length);

// Maiúsculas e Minúsculas
let phrase = "Palavras Maiúsculas e Minúsculas."
console.log(phrase.toLowerCase());
console.log(phrase.toUpperCase());

// Convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber));

// Convertendo para Decimal
let intergerNumber = 33/4
console.log(parseInt(intergerNumber));

// Alteração de números com decimais "toFixed" e vendo "replace"
let niceNumber = 24.45674645675757
console.log(niceNumber.toFixed());
console.log(niceNumber.toFixed(2));
console.log(niceNumber.toFixed(3));
console.log(niceNumber.toFixed(4));
console.log(niceNumber.toFixed(4).replace('.', ','));

// Precisão Numérica
let otherNumber = 129/33
console.log(otherNumber.toPrecision());
console.log(typeof otherNumber.toPrecision());
console.log(Number(otherNumber.toPrecision()));
console.log(typeof Number(otherNumber.toPrecision()));


// Manipulando String e Arrays
/* 
    Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array 
*/

let newPhrase = "Fala meus queridos e queridas 🔥"
console.log(newPhrase);
console.log(newPhrase.split(' '));

let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray);
console.log(typeof phraseToArray);

// convertendo novamente o texto para string
// .join(' ') -> Permite que eu gere separações (- , _ / '')

let phraseModify = phraseToArray.join(' ').toLowerCase()
console.log(phraseModify);
console.log(typeof phraseModify);

// Manipulando Strings e Arrays
// Verificar se contém palavras ou letras

let stringInclude = "Veem ne mim PayLivre, pay pay 😁"
console.log(stringInclude.includes('Paylivre')); // Deve ser escrito da mesma forma
console.log(stringInclude.includes('PayLivre')); // Case Sensitive

// Objetos
let arrayInclide = [
    "PayLivre",
    "Veem",
    "ne mim",
    "Meu amor",
    {
        firstName: "Pay",
        lastName: "Livre"
    }
]

console.log(arrayInclide.includes("Meu amor"));

// Encontrando o objeto dentro do array
console.log(arrayInclide.includes("Pay"));
console.log(arrayInclide.includes({ firstName: "Pay" }));
console.log(arrayInclide.includes(arrayInclide[4].firstName));
// console.log(arrayInclide.includes({ firstName }));
// Não funciona com objetos, mas sim com arrays

// String só
// String starsWith
console.log(stringInclude.startsWith("Vee"));

// String endsWith
console.log(stringInclude.endsWith("😁"));


// Transformando um array em carácteres
let wordToArray = "Quem ta gostando diz Hey!!"
console.log(Array.from(wordToArray))


// Manipulando Arrays
const animals = ['🐵', '🐶', '🐺', '🐱', '🦁'] // 4 (length 5)
console.log(animals);

// Adicionar item no fim do array
console.log(animals.push('🐯'));
console.log(animals);
// Adicionar item no começo
console.log(animals.unshift('🦒'));
console.log(animals);
// Remover ite, do fim
console.log(animals.pop());
console.log(animals);
// Remover item do começo
console.log(animals.shift());
console.log(animals);

// Pegar somente alguns elementos do array
// Não modificar o array
console.log(animals.slice(0, 3));
console.log(animals);
// Remover 1 ou mais itens do array
//animals.splice(2, 4)
console.log(animals);

// Encontrar a posição do array
let index = animals.indexOf('🐵')
console.log(index);
animals.splice(index, 1)
console.log(animals);



