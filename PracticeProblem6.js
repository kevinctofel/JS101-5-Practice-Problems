// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ages = 0;
for (let person in munsters) {
  console.log(typeof(person))
  if (munsters[person]['gender'] === 'male'){
    ages += munsters[person].age;
  }

}
