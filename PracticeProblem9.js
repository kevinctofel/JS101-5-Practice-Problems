// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArray = arr.map((element) => {
  if (typeof(element[0]) == "string") {
    return element.sort()
} else {
  return element.sort((a, b) => a -b)
}
});

console.log(sortedArray);
