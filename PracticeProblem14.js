// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

// Expected result: [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let output = [];

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let produce = Object.values(obj)

const capitalize = str => {
  let formatted = [];
  str.forEach((word) => {
    formatted.push((word.slice(0,1)).toUpperCase() + word.slice(1));
     })
     return formatted;
}

produce.forEach(item => {
  if (item.type === 'fruit') {
    output.push(capitalize(item.colors));
  } else if (item.type === 'vegetable') {
    output.push((item.size).toUpperCase());
  }
} )

console.log(output);