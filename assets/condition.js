// IF AND ELSE
// SE E SE NÃO

let num = 10;
let num2 = 20;

// > < == === != !==
// && (AND) || (OR) ! (NOT)
if (num >= 10 || num2 <= 10) {
  console.log("Verdade");
} else {
  console.log("Mentira");
}

let isAdmin = true;

if (!isAdmin) {
  console.log("Verdade");
} else {
  console.log("Mentira");
}

// Mesmas variaveis
if (num < 10) {
  console.log("Sim");
} else if (num > 10 && num2 <= 20) {
  console.log("Sim");
} else {
  console.log("Não");
}

// Switch
let myExpression = "d";

switch (myExpression) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  case "c":
    console.log("C");
    break;
  default:
    console.log("Outra. Tecla: ", myExpression);
    break;
}

// Calculadora
function calc(num1, operator, num2) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    default:
      console.log("Não entendi");
      break;
  }

  return result;
}

console.log(calc(4, "*", 4));
console.log(calc(12, "-", 4));
console.log(calc(42, "/", 4));
console.log(calc(4, "+", 14));
console.log(calc(3, "%", 14));

// Throw and Try Catch

// Saber a minha idade
function myAge(age) {
  if (!age) {
    throw "Você precisa colocar a idade";
  }

  console.log("eu executei depois do erro");
}

try {
  myAge(36);
  console.log("Ja tratei e deu certo");
} catch (error) {
  console.log(error);
}

console.log("Programa continua");
