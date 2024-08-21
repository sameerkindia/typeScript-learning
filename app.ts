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

/////////////// Union Type
let id: number | string;
id = 101;
id = "E101";
