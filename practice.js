// task-1
let data = {
  shophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC high school" },
          { location: "mirpur-10,dhaka-1216" },
        ],
      },
      {
        secondary: [
          { school_name: "Noice high school" },
          { location: "johannesburg,RSA" },
        ],
      },
    ],
  },
};

// console.log(data.shophia.study[1].secondary[1].location);

// task-2
let students = {
  2222: {
    name: "jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "st.johnson",
      city: "peter burg",
      country: "UK",
    },
  },
  3333: {
    name: "Harry",
  },
};

// console.log(students["2222"].address.city);
// console.log(students["3333"].name);

// task-3
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "Habluder Adda",
        category: "XSL",
      },
      bookCategory: "basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder Adda",
        category: "MSL",
      },
      bookCategory: "beginner",
    },
  ],
};

// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// task-4
const array = [1, 3, 5, 7, 9];

// for loop
for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]+1);
}

// map
const evenNumbers = array.map((arr) => arr + 1);
// console.log(evenNumbers);

// task-5
const number = [33, 50, 78, 79, 80, 100, 110];

// filter
const result = number.filter((num) => num % 10 == 0);
// console.log(result);

// find
const result2 = number.find((num) => num % 10 === 0);
// console.log(result2);

// task - 6
const instructor = [
  { name: "akil", position: "senior" },
  { name: "bhiba", position: "junior" },
  { name: "samad", position: "senior" },
  { name: "abdul", position: "junior" },
];

const findSenior = instructor.filter((ins) => ins.position === "senior");
// console.log(findSenior);

// task-7
const person = [
  { name: "akil", age: 19 },
  { name: "bhiba", age: 29 },
  { name: "samad", age: 39 },
  { name: "abdul", age: 49 },
];

const sumOfAge = person.reduce(
  (accumulation, current) => accumulation + current.age,
  0
);
// console.log(sumOfAge);

let sum = 0;
for (p of person) {
  let h = p.age;

  sum = sum + h;
}
// console.log(sum);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

