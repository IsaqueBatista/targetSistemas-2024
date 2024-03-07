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