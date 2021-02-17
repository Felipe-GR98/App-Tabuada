function caralho() {
    let num = document.getElementById("numerox")
    let tab = document.getElementById("mumia")

    if (num.value.length == 0) {
        alert("Coloca um numero carai")
    }
    else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for (c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            var texto = document.createTextNode(`${n} x ${c} = ${n * c}`)
            item.value = `tab${c}`
            item.appendChild(texto)
            tab.appendChild(item)
        }
    }
}