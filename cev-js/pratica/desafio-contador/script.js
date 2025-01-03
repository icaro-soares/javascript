function contar() {
    let inicio = document.querySelector('#txi')
    let fim = document.querySelector('#txf')
    let passo = document.querySelector('#txp')
    

    if (inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Verifique se não falta nenhum dado')
    } else {
        let res = document.querySelector('#res')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        res.innerHTML = 'Contando:<br>'
        
        if (p < 0) {
            alert('Passo inválido, será considerado passo 1')
            p = 1
        }
        if (i < f) {
            for (var c=i; c<=f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else if (i > f) {
            for (var c=i; c>=f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
        
    }
}