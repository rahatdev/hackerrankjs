//var _ = require('underscore');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


// write a function that returns the nth most common word

let words = ['mega', 'plato', 'fizz', 'buzz', 
'fizz', 'fizz', 'plato', 'fallout', 'cheesecake', 'cheese', 'fizz', 
'cheers', 'plato', 'mega'];

Array.prototype.swap = (x,y) => {
  let temp = this[x];
  this[x] = this[y];
  this[y] = temp;
  return this;
}

function getSortedWordsByCount(arr){

}
let blat = ['bonkeds', 'rivets']
console.log(blat.swap(0,1))

function getMostCommonWord(arr, n) {

  sorted = [];
  arr.forEach((val, i, arr) => {
    let existing = sorted.map(el => el.word).indexOf(val);
    if(existing > -1) {
      sorted[existing].count ++;
      if(existing > 0 && sorted[existing].count < sorted[existing + 1].count) sorted.swap(existing, existing + 1) 
    }
    else sorted.push({word: val, count: 1})
  })
  sorted.sort((a, b) => b.count - a.count)
  console.log(sorted)

  return n > 0 && n < sorted.length ? sorted[n -1] : -1;
}


console.log(JSON.stringify(getMostCommonWord(words, 1), null, 2))