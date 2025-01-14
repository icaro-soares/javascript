let dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

for (let pos in dias) {
    console.log(`${Number(pos)+1} - ${dias[pos]}`)
}