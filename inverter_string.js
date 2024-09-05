// String a ser invertida (pode ser alterada ou receber entrada do usuário)
let stringOriginal = "Exemplo de string";

// Função para inverter a string
function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Chamada da função e exibição do resultado
let resultado = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);
