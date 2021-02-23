const nome = 'Carla Lopes';
const anoDeNascimento = 1997;
let idade = 2021 - anoDeNascimento;
const peso = 52;
const altura = 1.56;
let imc = peso / (altura*altura);
console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC (Índice de Massa Corporal) é de', imc, '. Ela nasceu em', anoDeNascimento);

// ou dessa outra forma

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}. Ela nasceu em ${anoDeNascimento}.`);