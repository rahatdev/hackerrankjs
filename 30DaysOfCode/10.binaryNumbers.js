let intToBinary = function(n){
    let i = parseInt(n);
    return i.toString(2);
}


let numOfConsecutive = function(str, toTest){
    let n = 0;
    let current = 0;
    let arr = str.split('')
    //console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {        
        if(arr[i] === toTest){
            if(current === 0){
               current++; 
               if(current > n) n = current;
            } 

            if(arr[i] === arr[i+1]) current++;
            else current = 0;
        } 
        if(current > n) n = current;
    }
    return n;
}

function main(n) {
    //var n = parseInt(readLine());
    var bin = intToBinary(n);
    console.log(n +' - ' +bin + ' - ' +numOfConsecutive(bin, '1'));
}

main(5);
main(13);
main(456);
main(68);
main(211);
main(110);
main(323);
main(45);
main(0);




//tests for intToBinary
// console.log(intToBinary(5));
// console.log(intToBinary(24));
// console.log(intToBinary(1));
// console.log(intToBinary(3));
// console.log(intToBinary(8));
// console.log(intToBinary(5.2));
// console.log(intToBinary('mango'));

//tests for numOfConsec
// console.log(numOfConsecutive('111001', '1')) //should be 3
// console.log(numOfConsecutive('10011', '1')) //should be 2
// console.log(numOfConsecutive('1001', '1')) //should be 1
// console.log(numOfConsecutive('straightstst', 'st')) //should be 2
// console.log(numOfConsecutive('000000', '1')) //should be 0