// Função Anônima
(function () {
    console.log('PayLivre S2');
}) () // <-- Autoexecução

setTimeout(function() {
    console.log('Vou levar 2 segundos para ser executado!');
}, 3000)

// Escopo

// Parte 1
// let assunto

// function criarAssunto(assunto) {
//     return assunto
// }

// console.log(criarAssunto(assunto));


// Parte 2
// let assunto = 'Estudar'

// function criarAssunto(assunto) {
//     return assunto
// }

// console.log(assunto);
// console.log(criarAssunto(assunto));


// // Parte 3
// let assunto = 'Estudar'

// function criarAssunto(assunto) {
//     assunto = "Ouvir música"
//     return assunto
// }

// console.log(assunto);
// console.log(criarAssunto(assunto));


// Parte 4
let assunto = 'Estudar'

function criarAssunto () {
    assunto = "Ouvir música"
    return assunto
} 

console.log(assunto);
console.log(criarAssunto(assunto));


// Hoisting
digaSuaIdade()

function digaSuaIdade () {
    return console.log(30);
} // Funciona só com este tipo de função

// const digaSuaIdade = function () {
//     return console.log(30);
// } // Não funciona com este tipo de função


// Callback         // Function
function minhaFuncao (callback) {
    console.log('Inicio da minha função');

    callback(15, 15)

    console.log('Final da minha função');
}

minhaFuncao (
    (num1, num2) => {
        return console.log(num1 + num2);
    }
)

// Função Construtora
// function Soma () {
//     this.num1,
//     this.num2,
//     this.calc = function (num1, num2) {
//             return total = num1 + num2;
//         }
// }

// const math = new Soma ()

//console.log(math);
// console.log(math.calc(32, 32));

// const math2 = new Soma ()
// console.log(math2.calc(50, 64));

// const num1 = math.num1 = 24
// const num2 = math.num2 = 50

// console.log(num1);
// console.log(num2);
// console.log(math.calc(num1, num2));

// const math2 = new Soma ()
// const number1 = math2.num1 = 30
// const number2 = math2.num1 = 10
// console.log(math2.calc(number1, number1));


// const math = new Soma().calc(45, 45)
// console.log(math);

function Soma (num1, num2) {
    this.num1 = num1,
    this.num2 = num2,
    this.calc = function (num1, num2) {
            return total = num1 + num2;
        }
}

const math = new Soma()
console.log(math.calc(20, 40));


// Função Nativa
const data = new Date()
console.log(data);

const data2 = new Date().getDay()
console.log(data2);