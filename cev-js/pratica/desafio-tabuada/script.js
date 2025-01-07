function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('tab')
    
    if (num.value.length == 0) {
        alert('Verifique os dados')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}