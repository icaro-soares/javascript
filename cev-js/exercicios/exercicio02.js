var nome = 'Ícaro'
var v1 = 8
var sal = 1412
var v2 = 6
var soma = v1 + v2

console.log('Seja bem vindo(a) ' + nome + '!')
console.log(`O primeiro valor é ${v1}`)
console.log(`Seu salário é ${sal.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`O segundo valor digitado foi ${v2}`)
console.log(`A soma dos valores é ${soma}`)