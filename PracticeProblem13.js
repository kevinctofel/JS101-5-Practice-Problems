// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

// Expected result: [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let arrayUnsorted = [];
const sumOfOdds = (arr) => {

  arr.forEach(subArray => {
    let total = 0;
    subArray.forEach(element => {

      if (element % 2 !== 0) {
        total += element;
      }

    })
    arrayUnsorted.push(total);
  })
}

sumOfOdds(arr);
console.log(arrayUnsorted);