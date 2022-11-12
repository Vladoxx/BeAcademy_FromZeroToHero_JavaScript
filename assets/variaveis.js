// Declarar
var name = "Wlad"
console.log(name);

let name2 = "Andres"
console.log(name2);

const PI = 3.14

// Globais - Scopo Total
// Hoisting -> var

console.log('Variável name existe aqui?', name);

{ // Scopo (Bloco de código)
    // Local
    var name = "Luan"
}
console.log('Variável name existe aqui?', name);

// Locais
let nome = "Luan"

console.log('Meu nome chegou aqui?', nome);


{ // Scopo (Bloco de código)
    // Local
    let nome = "Jenifer"
    console.log('Meu nome chegou aqui?', nome);
}

console.log('Meu nome chegou aqui?', nome);


// Objetos
const human = {
    name: "Luan Monteiro",
    age: 30,
    weigth: 90,
    isAthlete: true,
    walk: function walking() {
        console.log('eu ando bastante!');
    }
} // Objeto

// Concatenação
console.log("O humano " + human.name + " tem a idade de " + human.age);

// Interpolação
console.log(`O humano ${human.name} tem a idade ${human.age}`);


// console.log({human});
// console.log(human.age);
// console.log(human.name);
// console.log(human.walk());

// Array
const animals = [
    "Elefante", // 0
    "Gato",     // 1
    "Leão",     // 2
    "Cachorro"  // 3
    {           // 4 
        name: "Moacir",
        age: 2,
        weight: 4
    }
]

// Tamanho 5
console.log(animals);
console.log(animals[2]);
console.log(animals[4].name);