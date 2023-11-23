// properties,method
class product {
  name = "hello";
  items(item) {
    console.log(`i want to buy ${item}`);
  }
}

const call = new product();
call.items("milk");
// console.log(call);

class teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
}

const result = new teacher("shafin", "CSE");
// console.log(result);

class myInfo {
  constructor(name, age, birth, aim) {
    this.name = name;
    this.age = age;
    this.birth = birth;
    this.aim = aim;
  }

  thoughts(topic) {
    console.log(`i want to be a ${topic}`);
  }
}

const finalOutput = new myInfo("shafin", 19, "29 May 2004", "Mern stack");
finalOutput.thoughts("Full-stack developer");
console.log(finalOutput);
