// main entry point for tootling around and for testing.

module.exports = function(){
    return 'hellos';
}

// const arr2d = require('./30DaysOfCode/11.2dArrays');
const gen = require('./shared/generator');
console.log(gen.getRandomInt(1,12));

let arr = gen.getSquare2dArray(9, 9);
arr.forEach(element => {
    console.log(element.join(' '));
});
