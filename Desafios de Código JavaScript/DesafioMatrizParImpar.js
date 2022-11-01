/*

Desafio:
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada:
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída:
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:

*/

let arrayEntradas = '4312'.split('');

let arrayOrganizado = new Array();

arrayEntradas.map(numero => (numero % 2 !== 0) ? arrayOrganizado.push(numero) : arrayOrganizado.unshift(numero));

console.log(arrayOrganizado.join());