// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vals = Object.values(obj);

vals.forEach(word => {
  let vowels = 'aeiou';
  let words = word.join('');
  // console.log(words);
  words.split("").forEach(char=> {
    if (vowels.includes(char)) {
      console.log(char);
    };
  });
  
})
