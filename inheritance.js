// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes  a voice `);
//   }
// }

// class Dog extends Animal {
//   constructor(name, bread) {
//     super(name);
//     this.bread = bread;
//   }
// }

// const max = new Dog("max", "golden retriver");
// max.speak();

// console.log(max.bread);


/////overriding and overwriting

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes  a voice `);
//   }
// }

// class Dog extends Animal {
//   constructor(name, bread) {
//     super(name);
//     this.bread = bread;
//   }
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const max = new Dog("max", "golden retriver");
// max.speak();

// console.log(max.bread);



class Person {
  constructor(name) {
    // this.grade = grade;
    this.name = name;
  }

  study() {
    console.log(`${this.name}  is studying `);
  }
}

class Student extends Person {
  constructor(grade, name) {
    super(name);
    this.grade = grade;
  }
}

const max = new Student("10", "akshat");
max.study();

console.log(max.grade);
