const gen = require('../shared/generator');

module.exports = {
    main,
    sumHourglass,
    highestHourGlassSum,
    highestHourGlassShort
}

function main() {
    // var arr = [];
    // for(arr_i = 0; arr_i < 6; arr_i++){
    //    arr[arr_i] = readLine().split(' ');
    //    arr[arr_i] = arr[arr_i].map(Number);
    // }

    let arr = gen.getSquare2dArray(6);    
    //console.log(highestHourGlassSum(arr));
    console.log(highestHourGlassShort(arr));
}

function highestHourGlassShort(arr){
    let sumArr = [];
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = 0; j < arr.length - 2; j++){
            sumArr.push(
                arr[i][j] + arr[i][j+1] + arr[i][j+2]
                + arr[i+1][j+1]
                + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            )
        }
    }
    sumArr.sort();
    return sumArr.pop();
}

function sumHourglass(arr3x3){
    if(Array.isArray(arr3x3) && arr3x3.length === 3){
        //input validation.
        arr3x3.forEach(row => {
            if(!Array.isArray(row) || row.length !== 3 ) throw 'Input must be a 3x3 array';            
            row.forEach(element => {
               if(typeof element !== 'number') throw 'Input must be an array of numbers.' 
            });
        });

        let sum = 0;
        for(let i = 0; i < 3; i++){
            if(i === 1){ //i.e middle row
                sum += arr3x3[i][i]; //arr[1][1]
            } else {
                arr3x3[i].forEach(element => {
                    sum += element;
                });
            }            
        }
        return sum;
    } else {
        throw 'Input must be a 3x3 Array of numbers.';
    }
}

function highestHourGlassSum(arr){
    try {
        let maxSum = -9999999999; //replace
        let sum = maxSum;
       
        for (let i = 0; i < arr.length - 2; i++) {
            let row = arr[i];
            // console.log('---------------------- ' +i);
            // console.log(row);
            for (let j = 0; j < arr.length - 2; j++) {
                let subArr = [];
                // gen 3x3 subarray 
                for(let k = 0; k < 3; k++){
                    subArr[k] = [];
                // holy nested loops batman, we gotta get rid of this.
                    for(let l = 0; l < 3; l++){
                        subArr[k][l] = arr[i+k][j+l];
                    }
                //console.log(subArr[k]);
                }
                //console.log('');
                sum = sumHourglass(subArr);
                //console.log("sum of " +i +' : ' +sum)
                if(sum > maxSum) maxSum = sum;
                
            }
            
        }

        return maxSum;
    } catch (err) {
        return err;
    }
}
