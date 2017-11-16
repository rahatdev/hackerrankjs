// input generator

module.exports = {
    getSquare2dArray,
    getRandomInt
}

function getSquare2dArray(size){
    let arr = [];
    for(let i = 0; i < size; i++ ){

    }
}

function getRandomInt(floor, ceiling){
 
    if(Number.isInteger(floor) === false) return false//{ msg: 'min must be a number' }
    if(Number.isInteger(ceiling) === false) return false//{ msg: 'min must be a number' }
    if(floor > ceiling) return false;
    
    return Math.floor(Math.random() * ceiling) + floor
}