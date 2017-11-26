
const toBinary = (i)=>{
    if(i === 1) return '1'
    else if(i < 1) return '0'
    return toBinary(parseInt(i/2)) + i%2
}

module.exports = {
    toBinary
}