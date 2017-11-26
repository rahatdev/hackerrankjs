
function toBinary(i){
    if(i === 1) return '1'
    else if(i < 1) return '0'

    let bin = ''
    let left = parseInt(i/2)
    let remainder = i%2
    return toBinary(left) + remainder
}
