
const toBinary = (i)=>{
    if(i === 1) return '1'
    else if(i < 1) return '0'
    return toBinary(parseInt(i/2)) + i%2
}

const toDecimal = (binary) => {
    let arr = binary.split('')
    let num = 0
    let maxBase = arr.length - 1
    arr.forEach(b => {
        if(maxBase <= 1) {
            if(b === 1) num += 1
        } else {
            num += 2 ** (maxBase * b)
            maxBase --
        }
    })
    return num
}

module.exports = {
    toBinary
}