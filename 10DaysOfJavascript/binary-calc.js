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
    if (operand1 === '' || operator === '') return
    //todo - error case when no operand2 entered
    //regex to get operand2 - in future, maybe the whole thing can be regex-ed
    let str = res.innerHTML
    let re = /[\+\-\*\/]/
    operand2 = str.substr(str.match(re).index + 1)

    let result = ''

    switch (operator) {
        case '+':
            result = binaryAdd(operand1, operand2)
            break;
        case '-':
            result = binarySub(operand1, operand2)
            break;
        case '*':
            result = binaryMult(operand1, operand2)
            break;
        case '/':
            result = binaryDiv(operand1, operand2)
            break;
        default:
            break;
    }
    console.log(result)
    if (result !== '') {
        res.innerHTML = result
        operand1 = result
        operator = ''
        operand2 = ''
    }
}

// math
// TODO rewrite with bitwise
function binaryAdd(x, y) {
    let result = parseInt(x, 2) + parseInt(y, 2)
    return result.toString(2)
}

function binarySub(x, y) {
    let result = parseInt(x, 2) - parseInt(y, 2)
    return result.toString(2)
}

function binaryMult(x, y) {
    let result = parseInt(x, 2) * parseInt(y, 2)
    return result.toString(2)
}

function binaryDiv(x, y) {
    let result = parseInt(x, 2) / parseInt(y, 2)
    return result.toString(2)
}

