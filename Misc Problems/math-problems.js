//  Implement an exponent function
function getExponent(num, exponent) {

    if (exponent === 0) return 1
    let passes = 0; // for measure algorithmic efficiency

    // baseline
    // let total = num;
    // for(let i = 1; i < exponent; i++){
    //     total *= num
    //     passes ++
    // }

    // OlogN
    let total = 1;
    while (exponent > 1) {
        if (exponent % 2 === 0) {
            num *= num
            exponent /= 2
            //console.log(`num: ${num} --- exponent: ${exponent}`)
        }
        else {
            total *= num
            exponent -= 1
        }
        passes++
    }

    console.log(`passes: ${passes}`)
    return total * num;
}

//console.log(getExponent(1,678987))
//console.log(getExponent(2, 25))
// -----------------------------------------------------------------------------

//Given a funciton rand5() implement rand7
const rand5 = () => Math.round(Math.random() * 5)

function rand7() {
    return Math.round(rand5() * 1.4)
}
console.log(rand7())


