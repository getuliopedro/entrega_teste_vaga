function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso
let numero = 21; 
console.log(isFibonacci(numero));
