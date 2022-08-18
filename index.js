// Ex 1

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];







// Ex 2

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const newArrayOfNumbers = arrayOfNumbers.map(item => item + 1)
console.log(newArrayOfNumbers);

// Ex 3
const numbers = [22, 2, 31, 110, 6, 13]

const filtered = numbers.filter(num => (num % 2 === 0))
console.log(filtered);


// filterEvens([1, 2, 3, 11, 12, 13]);
//returns [2,12]
// filterEvens([22, 2, 31, 110, 6, 13]);
 //returns [22,2,110,6]
