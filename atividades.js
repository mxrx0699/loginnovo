// Crie um programa que sorteia um número entre 1 e 100. Se for par, exiba "Número X é par". Se for ímpar, exiba "Número X é ímpar".
// let x = (Math.floor(Math.random() * 100)+1)
// document.write(x + "<br>")
// if(x % 2 == 0) {
//     document.write("O número X é par")
// } else {
//     document.write("O número X é ímpar")
// }

// // Crie um programa que simula o lançamento de um dado de 6 lados e exibe o número sorteado.
// document.write(Math.floor(Math.random() * 100 ) + 1)

// Receba um número decimal qualquer e exiba:
// // // O valor arredondado para cima (Math.ceil())
// document.write(Math.ceil(10.35))
// // // O valor arredondado para baixo (Math.floor())
// document.write(Math.floor(992.32))
// // // O valor arredondado normalmente (Math.round())
// document.write(Math.round(82.19))

// Crie um programa que recebe os valores dos catetos de um triângulo retângulo e calcula a hipotenusa usando o Teorema de Pitágoras:

// let hipotenusa1 = (Math.floor(Math.random()*100)+1);
// console.log("Cateto 1 : "+hipotenusa1);
// let hipotenusa2 = (Math.floor(Math.random()*100)+1);
// console.log("Cateto 2: "+hipotenusa2);
// hipotenusa1 = (Math.pow(hipotenusa1,2));
// console.log("Cateto 1 ao quadrado: "+hipotenusa1);
// hipotenusa2 = (Math.pow(hipotenusa2,2));
// console.log("Cateto 2 ao quadrado: "+hipotenusa2);

// let resultadoHipotenusa = (Math.sqrt(hipotenusa1+hipotenusa2));
// console.log(resultadoHipotenusa.toFixed(2));

// Crie um programa que solicita ao usuário dois números (mínimo e máximo) e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela.
// function naotenhosorte(n1, n2) {
//     return Math.floor(Math.random() * (n1 - n2 + 1) + n2);
// }
// let min = parseInt(prompt("Menor número"))
// let max = parseInt(prompt("Maior número"))

// document.write("Não tenho sorte, mas o número deu: " + naotenhosorte(max,min))