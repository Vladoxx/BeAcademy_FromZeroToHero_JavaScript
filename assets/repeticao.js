// for
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        // break
        // continue
    }
    console.log(i);
}


// While (Enquanto)
let interator = 1

while (interator <= 10) {
    console.log(interator);
    // Incremento
    interator++
}


// for of
// Array

let number = [2, 4, 3, 5, 6]

for (num of number) {
    if (num > 4) {
        console.log(num);
    }
}

let numeros = [2, 4, 3, 5, 6]

for (numeros of number) {
        console.log(numeros);
}


// For in
let animals = {
    name: 'leão',
    weight: 200,
    age: 4
}

for (item in animals) {
    // 1 captura valores de o objeto
    console.log(animals['age']);
    // 2 Captura todo o objeto
    console.log(animals);
    // 3 Mostra os valores das propriedades
    console.log(animals[item]);
    // 4 Captura valores individuais das propriedades
    console.log(animals.name);
}

let arrayName = ['Ana', 'Carlos', 'Laura', 'Luna']

for (item in arrayName) {
    console.log(arrayName); // Mostra todo o array
    console.log(arrayName[item]); // Mostra todos os valores
    console.log(arrayName[2]); // Mostra diretamente um vetor
    console.log(item); // Index dos vetores (Posições)
}
