// filter selects element based on a condition and returns the result as an array

const numbers = [20, 30, 45, 50, 61, 70];
const player = numbers.filter((n) => n > 30);
const player2 = numbers.filter((n) => n % 2 === 1);
// console.log(player2);

const num = ["hello", "bye", "hi"];
const odd = num.filter((n) => n.length % 2 === 0);
console.log(odd);

// filter === condition fullfill hole ekadhik element thakle shobgula element e dibe array akare ar condition match na korle empty array dibe
