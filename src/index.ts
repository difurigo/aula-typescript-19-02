// -------------------------------------------------------------------------------- 19/02
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

/*
Exercício 3 - Classe e Instância
Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
*/

class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

// -------------------------------------------------------------------------------- 20/02

/*
1. Interfaces e Tipagem Avançada
Exercício 1
Crie uma interface chamada Carro, que contenha as seguintes propriedades:
marca (string)
modelo (string)
ano (number)
motor (opcional, string)
Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
*/

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
    detalhes(): string;
}
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex",
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
};

console.log("Meu Carro:", meuCarro);

/*
Exercício 2
Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
Depois, implemente essa função e teste com diferentes valores.
*/

interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 3 x 4:", multiplicar(3, 4)); // 12
console.log("Multiplicação 7 x 2:", multiplicar(7, 2)); // 14

/*
2. Generics
Exercício 3
Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
Teste a função com um array de números e um array de strings.
*/

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "é", "incrível"];
console.log("Array invertido (números):", inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log("Array invertido (palavras):", inverterArray(palavras)); // ["incrível", "é", "TypeScript"]

/*
Exercício 4
Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
*/

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());

/*
3. Manipulação Avançada de Tipos
Exercício 5
Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.
*/

type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);

/*
Exercício 6
Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.
*/

type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);