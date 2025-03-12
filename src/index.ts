/*
Exercício 1 - Tipagem e Arrays
Crie um array de números e imprima a soma dos valores.
*/

let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

