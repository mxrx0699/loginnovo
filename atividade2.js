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
// let numeros = (Math. floor(Math.random() * 50)+1)
// let randomNumeros = []
// for (let i = 0; i < 50; i++) {
//     randomNumeros.push(randomNumeros());
// }
// let paresNumeros = randomNumeros.filter(numeros % 2 == 0)
// console.log("Números aleatórios: ", randomNumeros)
// console.log("Números pares: ", paresNumeros)

// Peça ao usuário 3 nomes e adicione-os a um vetor usando push(). Depois, exiba a lista ordenada.
// let nome = [];

// for(let i = 0; i <=2; i++){
//     nome.push(prompt("Insira seu nome:"));
// }
// nome.sort()
// document.write("Os nomes são: " + nome + "<br>")

// Crie um vetor com os dias da semana e peça para o usuário informar um número (1 a 7). Exiba o nome do dia correspondente.
// let dias = ["Domingo", "Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-feira", "Sexta-Feira","Sábado"]

// while (true) {
//     let indice = prompt('Digite um número entre 1 e 7 para ver o dia da semana, ou "sair" para encerrar:') - 1;
 
//     if (indice <0 || indice >6) {
//       break;
//     }
 
//     indice = parseInt(indice);
     
//     alert("O dia da semana é "+ dias[indice])
   
// }

// Crie um programa que receba os nomes de 10 alunos e suas notas em um vetor. Depois, exiba a média da turma." Ao término, exiba também para cada aluno a sua nota.

let alunos = []
    let notas = []
    let soma = 0

    for(let i=0;i<10;i++){
        let aluno = prompt("Digite seu nome")
        let nota = parseFloat(prompt("Digite sua nota"))

        alunos.push(aluno)
        notas.push(nota)
        soma+=nota
       
    }

    let media = soma/alunos.length

    document.write("A MÉDIA DOS ALUNOS FOI: " + media +"<br>")

    for(let i =0; i<10;i++){
        document.write("Aluno: " +alunos[i]+ " - Nota: " +notas[i] + "<br>")
    }
