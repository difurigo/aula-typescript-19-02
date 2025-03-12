/*
Exercício 1 - Tipagem e Arrays
Crie um array de números e imprima a soma dos valores.
*/

let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

/*
Exercício 2 - Função Tipada
Crie uma função que recebe um nome e retorna uma mensagem personalizada.
*/

function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

