const nome = 'Carla'; //string
const nome1 = "Maria"; //string
const nome3 = `Lopes`; //string

const numero = 10;  //number
const numero1 = 12.5;  //number

let nomeAluno; // underfined -> não aponta pra local nenhuma na memória
const sobreNome = null; //nulo -> não aponta pra local nenhuma na memória

const aprovado = true;     // Boolean = true, false (lógico);

console.log(typeof aprovado, sobreNome, nomeAluno);

let a = 2;
const b = a;
console.log(a,b); // 2,2

a = 3;
console.log(a,b); // 3,2

//operadores aritméticos

/*

+ adição / concatenação
- subtração
* multiplicação
/ divisão
** potenciação
% quociente de divisã0
-- decremento
++ incremento

*/

 //adição

 const num1 = 10;
 const num2 = 2;
 
 console.log(num1 + num2);

//concatenação

const alfabeto = 'abc';
const alfabeto1 = 'def';
console.log(alfabeto + alfabeto1);

//subtração

 console.log(num1 - num2);

 //multiplicação

 console.log(num1 * num2);

 //divisão
 
 console.log(num1 / num2);

 //potenciação

 console.log(num1 ** num2);

 //quociente de divisão

 console.log(num1 % num2);

//funciona nas regras matemática

console.log((num2 + num2) * num1);

let numr = 4;  //não funciona com const
numr++;
console.log(numr);

let contador = 5;
console.log(++contador);

contador += 2; // contador = contador + 2 
// *=, -=, /=, **= operadores de atribuição.
console.log(contador);

//parseint = passa a string para número inteiro
//parsefloat = passa a string para número decimal
// number('7'); = passa string para número