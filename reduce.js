const numbers = [2, 3, 4, 5, 6, 7];
const total = numbers.reduce((present, previous) => present + previous, 3);
// console.log(total);

const products = [
  { id: 1, name: "lenovo", price: 35000 },
  { id: 2, name: "dell", price: 50000 },
  { id: 3, name: "hp", price: 38000 },
];

// map
const mapping = products.map((product) => product.id);
// console.log(mapping);

// filter
const filtering = products.filter((product) => product.price > 40000);
// console.log(filtering);

// forEach
const forEach = products.forEach((product) => console.log(product.name));

// find
const finding = products.find((product) => product.price < 40000);
// console.log(finding);

// reduce
const reducing = products.reduce(
  (accumulation, current) => accumulation + current.price,
  0
);
console.log(reducing);
