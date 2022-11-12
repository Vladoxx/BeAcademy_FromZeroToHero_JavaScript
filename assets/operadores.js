// Operadores Lógicos

// Operador Incremento e Decremento
// ++ --
let IncrementNumber = 4
console.log(IncrementNumber); 
// +1
IncrementNumber++
console.log(IncrementNumber); // 5
IncrementNumber++ 
console.log(IncrementNumber); // 6

let decrementNumber = 50
console.log(decrementNumber);
decrementNumber--
console.log(decrementNumber);
decrementNumber--
console.log(decrementNumber);
decrementNumber--
console.log(decrementNumber);

// Operadores Arit,éticos
// + - / * %
let note1 = 10
let note2 = 7.5
let note3 = 5.5
let note4 = 3.5
let avg = (note1 + note2 + note3 + note4)/4
console.log(Number(Math.floor(avg)));

// Operadores Relacionais e Igualdade
// < > == === != !== >= <=
let numberRelation1 = 20
//let numberRelation1 = 40
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2
console.log(relation);
relation = numberRelation1 !== numberRelation2
console.log(relation);
relation = numberRelation1 == numberRelation2
console.log(relation);
relation = numberRelation1 === numberRelation2
console.log(relation);

// Operador de atribução
let newNumber = 20
newNumber += 40
newNumber *= 3
newNumber -=60
newNumber /= 6
newNumber %= 5

console.log(newNumber);

// Operadores Condicionais (Ternário)
// (condition) ? true : false
let value = 24
let value2 = 32

const newCondition = value >= value2 ? 'Verdade' : 'Mentira'
const newCondition2 = value <= value2 ? 'Verdade' : 'Mentira'
console.log(newCondition);
console.log(newCondition2);

const newCondition3 = value >= value2 ? 'Verdade' : value == value2 ? 'Verdade' : 'Mentira'
console.log(newCondition3);


