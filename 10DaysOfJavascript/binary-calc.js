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
    let intx = binaryToInt(x)
    let inty = binaryToInt(y)
    let result = intx + inty
    console.log(intx +' + ' +inty +' = ' +result)
    return intToBinary(result)
}

function binarySub(x, y) {
    let intx = binaryToInt(x)
    let inty = binaryToInt(y)
    let result = intx - inty
    return intToBinary(result)
}

function binaryMult(x, y) {
    let intx = binaryToInt(x)
    let inty = binaryToInt(y)
    let result = intx * inty
    return intToBinary(result)
}

function binaryDiv(x, y) {
    let intx = binaryToInt(x)
    let inty = binaryToInt(y)
    let result = intx / inty
    return intToBinary(result)
}

//TODO error
function binaryToInt(binary) {
    let arr = binary.split('')
    let num = 0
    let maxBase = arr.length - 1
    arr.forEach(b => {
        if (maxBase <= 1) {
            if (b === 1) num += 1
        } else {
            num += 2 ** (maxBase * b)
            maxBase--
        }
    })
    return num
}

function intToBinary(n) {
    let i = parseInt(n);
    return i.toString(2);
}