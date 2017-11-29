const btn0 = document.getElementById('btn0'),
    btn1 = document.getElementById('btn1'),
    btnClr = document.getElementById('btnClr'),
    btnEql = document.getElementById('btnEql'),
    btnSum = document.getElementById('btnSum'),
    btnSub = document.getElementById('btnSub'),
    btnMul = document.getElementById('btnMul'),
    btnDiv = document.getElementById('btnDiv'),
    res = document.getElementById('res')

let operand1 = '',
    operand2 = '',
    operator = ''

//num btn clicks
btn0.onclick = () => {
    res.innerHTML += 0
}
btn1.onclick = () => {
    res.innerHTML += 1
}

//operator btn clicks
btnSum.onclick = () => {
    this.addOp('+')
}

btnSub.onclick = () => {
    this.addOp('-')
}

btnMul.onclick = () => {
    this.addOp('*')
}
btnDiv.onclick = () => {
    this.addOp('/')
}

function addOp(op) {
    if (operand1 !== '') return

    if (operator === '') {
        operator = op
        operand1 = res.innerHTML
        res.innerHTML += op
    }
}
// function button clicks
btnClr.onclick = () => {
    res.innerHTML = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

btnEql.onclick = () => {

}