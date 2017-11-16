// input generator

module.exports = {
    getSquare2dArray,
    getRandomInt
}

function getSquare2dArray(size, maxValue) {
    let max = 9;
    if (maxValue > 0) max = maxValue;

    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = [];
        for (let j = 0; j < size; j++) {
            arr[i][j] = getRandomInt(0,max);
            //console.log(arr[i]);
        }
    }

    return arr;
}

function getRandomInt(floor, ceiling) {

    if (Number.isInteger(floor) === false) return false//{ msg: 'min must be a number' }
    if (Number.isInteger(ceiling) === false) return false//{ msg: 'min must be a number' }
    if (floor > ceiling) return false;

    return Math.floor(Math.random() * ceiling) + floor;
}

