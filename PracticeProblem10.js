// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArray = arr.map((element) => {
  if (typeof(element[0]) == "string") {
    return element.sort((b, a) => {
        if (a < b) {
            return -1;
          }
          if (a> b) {
            return 1;
          }
          // a must be equal to b
          return 0;
    })} else {
  return element.sort((a, b) => b - a)
}
});

console.log(sortedArray);
