const faturamentoDiario = [
    2200, 1800, 0, 1900, 2300, 2100, 0, 2000, 2400, 2500, 
    2600, 0, 2700, 2200, 2100, 0, 2300, 2500, 2600, 2700,
    0, 2400, 2500, 2800, 2900, 0, 3000, 3100, 0, 3200
];

// Remove zeros (dias sem faturamento) para cálculos
const faturamentoFiltrado = faturamentoDiario.filter(valor => valor > 0);

const menorFaturamento = Math.min(...faturamentoFiltrado);
const maiorFaturamento = Math.max(...faturamentoFiltrado);

const somaFaturamento = faturamentoFiltrado.reduce((acc, curr) => acc + curr, 0);
const mediaFaturamento = somaFaturamento / faturamentoFiltrado.length;

const diasAcimaDaMedia = faturamentoFiltrado.filter(valor => valor > mediaFaturamento).length;

console.log(`Menor faturamento diário: R$${menorFaturamento}`);
console.log(`Maior faturamento diário: R$${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
