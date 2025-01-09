let marcas = ['porsche', 'corola', 'centra', 'vectra', 'hilux', 'gol', 'corsa']
marcas.push('ranger rover')
marcas.sort()

for (let pos in marcas) {
    console.log(marcas[pos])
}

console.log(marcas.indexOf('hilux'))
console.log(marcas.indexOf('volvo'))
