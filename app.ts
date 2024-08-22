export {};
// class App {
//   test() {
//     console.log("class working");
//   }
// }

// let a = new App();

// a.test();

////////////////////////////////
////////////////////////////////
// Arrays
////////////////////////////////
////////////////////////////////

// let array = ["sameer", "khan", "pali", 1, false, [""]];

// array.push("ts");

// array.push(100);

// array.push(true);

// array.push(["hello"]);

// // array.push({});

// console.log(array);

////////////////////////////////
////////////////////////////////
// Objects
////////////////////////////////
////////////////////////////////

// interface usersTyped {
//   name: string;
//   // age: number;
//   age: any;
//   city: string;
// }

// let users1: usersTyped = {
//   name: "sameer khan",
//   age: 24,
//   city: "pali",
// };

// let users2: any = {
//   name: "sameer khan",
//   age: 24,
//   city: "pali",
// };

// users2.job = "web developer";

// console.log(users2);

/////////////////////
// Functions

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(4, 5));

/////////////// Union Type
// let id: number | string;
// id = 101;
// id = "E101";

////////////////////////////////
////////////////////////////////
// Interface
////////////////////////////////
////////////////////////////////

// interface newUser {
//   name: string;
//   age: number;
//   getDetails: () => {};
// }

// const user3: newUser = {
//   name: "sameer",
//   age: 24,
//   getDetails: () => {
//     return "sameer khan";
//   },
// };

// console.log(user3);

class App {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): void {
    console.log(this.name, this.age);
  }
}

const sameer = new App("sameer", 24);

sameer.getName();
