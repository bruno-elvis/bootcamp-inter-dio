/*

Desafio:
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada:
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída:
A saída corresponde a um valor Booleano como no exemplo abaixo:

*/

const string = '()';

console.log((string.charCodeAt(1) === string.charCodeAt(0) + 1) ? true : 
    (string.charCodeAt(0) === 91 && string.charCodeAt(1) === 93) ? true :
    (string.charCodeAt(0) === 123 && string.charCodeAt(1) === 125) ? true :
    false
);