const data = [{ id: "CSE", name: "shafin", address: "mirpur,dhaka" }];

// console.log(data[0].address);

const product = {
  count: 5000,
  data: [
    { name: "macbook", price: 165000 },
    { name: "linux", price: 65000 },
  ],
};

// console.log(product.data[1].price);

const user = {
  count: 5000,
  address: {
    street: {
      first: "mirpur",
      second: "uttara",
      third: "banani",
    },
  },
};

const user2 = {
  count: 5000,
  address: {
    first: "mirpur",
    second: "uttara",
    third: "banani",
  },
};

console.log(user2.address.street?.second); //optional chain == if street value not define then not forward to second
