// main entry point for tootling around and for testing.
// TODO: write tests
const gen = require('./shared/generator');
const arr2d = require('./30DaysOfCode/11.2dArrays');

module.exports = function(){
    return 'hellos';
}

// tests for generator
console.log(gen.getRandomInt(1,12));

let arr = gen.getSquare2dArray(3, 9);
arr.forEach(element => {
    console.log(element.join(' '));
});


//tests for2dArrays.
//arr = gen.getSquare2dArray(3);
let sum = arr2d.sumHourglass(arr);
console.log(sum);

console.log('---------------------------------')
arr = gen.getSquare2dArray(6);
gen.print2dArray(arr);
sum = arr2d.highestHourGlassSum(arr);
console.log("highest sum: " +sum);
sum = arr2d.highestHourGlassShort(arr);
console.log("highest sum (short): " +sum);


arr = gen.getArray(6, 9);
console.log(arr)
arr.sort()
console.log(arr)
let distinct = Array.from(new Set(arr))
console.log(distinct)


