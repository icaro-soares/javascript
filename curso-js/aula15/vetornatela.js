let v = [8, 1, 7, 4, 2, 9]

console.log(v)
v.sort()
console.log('Após formatação:')
for (let pos in v) {
    console.log(`Posição ${pos} => ${v[pos]}`)
}

