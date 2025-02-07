// Crie um vetor com os nomes de cinco cidades e exiba todas no console.
// let cidades =  ["Caxias", "Nova Iguaçu", "Madureira", "Méier", "Cascadura"];
// console.log(cidades);

// Peça ao usuário para digitar três números e armazene-os em um vetor. Depois, exiba o maior número
// let numero = []
// for(let i=0; i<3; i++ ) {
//     let valor = parseInt(prompt(`Digite o ${i + 1}º número: `));
//     numero.push(valor);
// }
// let maiorNumero = Math.max(...numero);
// document.write("O maior número digitado é: "+maiorNumero);

// Crie um vetor com cinco números aleatórios de 1 a 50 e exiba apenas os números pares.
let numeros = (Math. floor(Math.random() * 50)+1)
let randomNumeros = []
for (let i = 0; i < 50; i++) {
    randomNumeros.push(randomNumeros());
}
let paresNumeros = randomNumeros.filter(numeros % 2 == 0)
console.log("Números aleatórios: ", randomNumeros)
console.log("Números pares: ", paresNumeros)

// Peça ao usuário 3 nomes e adicione-os a um vetor usando push(). Depois, exiba a lista ordenada.
// Crie um vetor com os dias da semana e peça para o usuário informar um número (1 a 7). Exiba o nome do dia correspondente.
// Crie um programa que receba os nomes de 10 alunos e suas notas em um vetor. Depois, exiba a média da turma." Ao término, exiba também para cada aluno a sua nota.

