// Estágio Ribeirão Preto - 2024 - ISAQUE BATISTA DE OLIVEIRA

// PERGUNTA 1

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(`Pergunta 1, resposta: ${SOMA}`);
// Resultado do processamento é 91







// PERGUNTA 2 sobre Feebonacci

// Para verificar se um número pertence à sequência de Fibonacci
function pertenceASequenciaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    // Para verificar se o número é 0 ou 1, que são os primeiros valores da sequência
    if (numero === 0 || numero === 1) {
        console.log(`Pergunta 2, resposta: ${numero} pertence à sequência de Fibonacci.`);
        return;
    }

    // Aqui vamos calcular os valores da sequência até ultrapassar o número fornecido
    while (atual <= numero) {
        // Se o número fornecido estiver na sequência, imprime uma mensagem e retorna
        if (atual === numero) {
            console.log(`Pergunta 2, resposta: ${numero} pertence à sequência de Fibonacci.`);
            return;
        }

        // Aqui vamos atualizar os valores da sequência
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    // Aqui temos se o número fornecido não estiver na sequência
    console.log(`Pergunta 2, resposta: ${numero} não pertence à sequência de Fibonacci.`);
}

// Aqui informamos um número 
const numeroParaVerificar = 26;
pertenceASequenciaFibonacci(numeroParaVerificar);







// Pergunta 3 para Descubrir a lógica e completar o próximo elemento

// a) 1, 3, 5, 7, ?
function proximoElementoA() {
    let ultimoElemento = 7;
    let proximoElemento = ultimoElemento + 2;
    console.log(`Pergunta 3, questão a, resposta: ${proximoElemento}`);

}

// b) 2, 4, 8, 16, 32, 64, ?
function proximoElementoB() {
    let ultimoElemento = 64;
    let proximoElemento = ultimoElemento * 2;
    console.log(`Pergunta 3, questão b, resposta: ${proximoElemento}`);
}

// c) 0, 1, 4, 9, 16, 25, 36, ?
function proximoElementoC() {
    let ultimoElemento = 36;
    let proximoElemento = Math.pow(Math.sqrt(ultimoElemento) + 1, 2);
    console.log(`Pergunta 3, questão c, resposta: ${proximoElemento}`);
}

// d) 4, 16, 36, 64, ?
function proximoElementoD() {
    let ultimoElemento = 64;
    let raiz = Math.sqrt(ultimoElemento);
    let proximoElemento = Math.pow(raiz + 1, 2);
    console.log(`Pergunta 3, questão d, resposta: ${proximoElemento}`);
}

// e) 1, 1, 2, 3, 5, 8, ?
function proximoElementoE() {
    let ultimoElemento1 = 8;
    let ultimoElemento2 = 5;
    let proximoElemento = ultimoElemento1 + ultimoElemento2;
    console.log(`Pergunta 3, questão e, resposta: ${proximoElemento}`);
}

// f) 2, 10, 12, 16, 17, 18, 19, ?
function proximoElementoF() {
    let ultimoElemento = 19;
    let proximoElemento = ultimoElemento + 1;
    console.log(`Pergunta 3, questão f, resposta: ${proximoElemento}`);
}

// Chamando as funções
proximoElementoA();
proximoElementoB();
proximoElementoC();
proximoElementoD();
proximoElementoE();
proximoElementoF();







// Pergunta 4 - Interruptores:

// Ligar o primeiro interruptor e esperar alguns minutos.
// Desligar o primeiro interruptor e ligar o segundo interruptor.
// Entrar na sala onde estão as lâmpadas.
// Aqui, vem as seguintes situações:

// Se a lâmpada estiver acesa, então o segundo interruptor controla essa lâmpada.
// Se a lâmpada estiver apagada e estiver quente, então o primeiro interruptor controla essa lâmpada.
// Se a lâmpada estiver apagada e fria, então o terceiro interruptor controla essa lâmpada.

console.log("Pergunta 4, está comentada no código")







//Pergunta 5 

function inverterString(original) {
    let invertida = '';
    for (let i = original.length - 1; i >= 0; i--) {
        invertida += original[i];
    }
    return invertida;
}

const minhaString = "Quero ser o próximo estagiário!";
const stringInvertida = inverterString(minhaString);

console.log(`Pergunta 5, resposta: String Original: ${minhaString}`);
console.log(`Pergunta 5, resposta: String Invertida: ${stringInvertida}`);