/*

Desafio: 
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

Entrada:
A entrada consiste em um número inteiro n, representando o valor total. 

Saída:
A saída consiste em retornar o menor número de números quadrados perfeitos. 

*/

let numInteiro = 12;
let controle;
let contador;
let contadorTotal;

const dp = new Array(numInteiro + 1).fill(Infinity);

for (let i = 1; i < dp.length; i++) {
    if (i * i <= numInteiro) {
        dp[i] = i * i;

    } else {
        i = dp.length - 1;

    };

};

contadorTotal = 1000;

for (let i = dp.length - 1; i > 0 && i <= numInteiro; i--) {
    if ((i > 0) && (dp[i] > 0)) {
        controle = numInteiro;
        contador = 0;

        for (let j = i; j > 0; j--) {
            while (controle > 0) {
                if (controle >= dp[j]) {
                    controle = controle - dp[j];
                    contador++;

                } else {
                    j--;

                };

            };

        };

        if (contadorTotal > contador) {
            contadorTotal = contador;

        };

    };

};

console.log(contadorTotal);