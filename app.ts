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

// class App {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getName(): void {
//     console.log(this.name, this.age);
//   }
// }

// const sameer = new App("sameer", 24);

// sameer.getName();

///////////////////////////////////
///////////////////////////////////
// Tuple
///////////////////////////////////
///////////////////////////////////

// let person: [string, number] = ["Alice", 25];

// let employee: [string, number] = ["Bob", 30];

// // Accessing elements
// let name = employee[0]; // "Bob"
// let age = employee[1]; // 30

// // Modifying elements
// employee[1] = 31; // OK
// // employee[0] = 100; // Error: Type 'number' is not assignable to type 'string'.

// let product: [string, number, boolean?] = ["Laptop", 1000];

///////////////////////////////////
///////////////////////////////////
// Leteral
///////////////////////////////////
///////////////////////////////////

// // String literal

// let direction: "north" | "south" | "east" | "west";

// direction = "north"; // OK
// direction = "south"; // OK
// // direction = "up"; // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'.

// // Number literal

// let statusCode: 200 | 404 | 500;

// statusCode = 200; // OK
// statusCode = 404; // OK
// // statusCode = 300; // Error: Type '300' is not assignable to type '200 | 404 | 500'.

// // Boolean literal

// let isActive: true | false;

// isActive = true; // OK
// isActive = false; // OK

// // Combining literal

// type Role = "admin" | "user" | "guest";

// let userRole: Role;

// userRole = "admin"; // OK
// userRole = "user"; // OK
// // userRole = "manager"; // Error: Type '"manager"' is not assignable to type 'Role'.

// // Function litreal

// function move(direction: "up" | "down" | "left" | "right") {
//   console.log(`Moving ${direction}`);
// }

// move("up"); // OK
// move("down"); // OK
// // move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type '"up" | "down" | "left" | "right"'.

///////////////////////////////////
///////////////////////////////////
// Alias
///////////////////////////////////
///////////////////////////////////

// type ID = string | number;

// let userId: ID;
// userId = 101; // OK
// userId = "admin"; // OK

// type Greet = (name: string) => string;

// const sayHello: Greet = (name) => `Hello, ${name}!`;

// // alias vs interface

// type AliasPerson = {
//   name: string;
//   age: number;
// };

// interface InterfacePerson {
//   name: string;
//   age: number;
// }

///////////////////////////////////
///////////////////////////////////
// Unknown
///////////////////////////////////
///////////////////////////////////

let someValue: unknown;

someValue = "Hello, World!";
someValue = 42;
someValue = true;

// Type Check

let data: unknown;

// Trying to use it directly will cause an error
// console.log(data.toUpperCase()); // Error: Object is of type 'unknown'.

// Correct way: Type checking first
if (typeof data === "string") {
  console.log(data.toUpperCase()); // Now it's safe to use
}
