// Função principal que recebe uma operação e dois números como entrada
function calculadora(operacao, numero1, numero2) {
    // Verifica qual operação foi solicitada e executa a correspondente
    switch (operacao) {
        case 'soma':
            return soma(numero1, numero2);
        case 'subtracao':
            return subtracao(numero1, numero2);
        case 'multiplicacao':
            return multiplicacao(numero1, numero2);
        case 'divisao':
            return divisao(numero1, numero2);
        default:
            return 'Operação inválida!';
    }
}

// Funções auxiliares para cada operação básica
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero!';
    }
    return a / b;
}

// Exemplo de uso:
console.log(calculadora('soma', 5, 3)); // Saída: 8
console.log(calculadora('subtracao', 10, 4)); // Saída: 6
console.log(calculadora('multiplicacao', 2, 3)); // Saída: 6
console.log(calculadora('divisao', 10, 2)); // Saída: 5
console.log(calculadora('divisao', 10, 0)); // Saída: Erro: Divisão por zero!
console.log(calculadora('potencia', 2, 3)); // Saída: Operação inválida!
