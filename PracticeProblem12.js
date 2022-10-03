// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

// use map to iterate and create new arrays/sub arrays

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let solution = arr.map(element => {
  let newElement = [];

  for (let item in element) {
    newElement = element.filter((item) =>
      item % 3 === 0);
  };
  return newElement;
});

console.log(solution);
