// const number = [1, 2, 3, 4];
// function callBack(num) {
//   console.log("num now", num);
//   return num;
// }
// const callBack = (n) => n * 2;
// const result = number.map(callBack);
// const result = number.map((n) => n * 2);
// console.log(result);

// map=== similar to loop and use in array

const num = ["hello", "bye", "hi"];
const length = num.map((n) => n.length);
// console.log(length);

const firstIndex = num.map((n) => n[0]);
// console.log(firstIndex);

const big = num.map((n) => n);
