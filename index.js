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


// EX 4
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const newFriends = friends.filter(name => name.includes('ka'))

console.log(newFriends);


// console.log(filterItems(friends, 'ka'));
// ["Rika"];
// console.log(filterItems(friends, 'e'));
// ["Jenna", "Bleda", "Oliver"];

//  EX 5

function sum(arr) {
  return arr.reduce((acc, numb) => acc + numb)
}

console.log(sum([1, 2, 3, 4, 5]));; //returns 15
console.log(sum([6, 7, 7])); //returns 20