// Exemplo 1

        // Método
function myFirstFunction() {
    // Emtra meu código
    console.log("Olha função!!!");
}

// Execute
myFirstFunction()

// Parametros e Argumentos
function sum(n1, n2) {
    console.log(n1 + n2);
}

sum(2, 5)

// Retorno
function myFirstFunctionWithReturn(num1, num2) {
    let total = num1 + num2
    return total
}

console.log(myFirstFunctionWithReturn(20, 20));

// Prato de comida
function meuPratoDeComida(contorno1, contorno2, contorno3, contorno4) {
    return `Meu prato de comida é: ${contorno1}, ${contorno2}, ${contorno3}, ${contorno4}`
}

const prato = meuPratoDeComida('Arroz', 'Frango', 'BananaDaTerraFrita', 'salada')

console.log(prato);


// Arrow Function
const myFirstArrowFunction = (num1, num2) => {
    let total = num1 + num2
    return total
}
const result = myFirstArrowFunction(30, 10)
console.log(result);
