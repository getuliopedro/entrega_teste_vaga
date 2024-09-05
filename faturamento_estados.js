// Valores de faturamento por estado
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcular o faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcular e exibir o percentual de cada estado
for (let estado in faturamento) {
    let percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}
