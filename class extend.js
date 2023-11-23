class vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  vehicle1() {
    console.log(`yesssss! i can do this`);
  }
}

class truck extends vehicle {
  constructor(name, price, color) {
    super(name, price);
    this.color = color;
  }
  vehicle2() {
    console.log("i can also do this easily");
  }
}

const first = new vehicle("truck", "65000");
first.vehicle1();

const second = new truck(first, "red");
console.log(first, second);
