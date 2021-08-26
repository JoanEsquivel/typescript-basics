"use strict";
//Basic Types
let id = 5;
let company = 'Joanmedia';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let arr = [1, true, 'test', 3];
//Tupple -> will define specific types to an array.
let person = [1, 'Joan', true];
let employee; // Array of tupples
employee = [
    [1, 'Name 1'],
    [2, 'Name 2'],
    [3, 'Name 3']
];
//Union
//Or string or number
let pid = 22;
//Enum -> create constants(Create a numeric value for each of them) By defaul
//Up will start will 0, but you can assign it other one like Up = 1
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Down);
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'Joan'
};
// Type Assertion -> Explicitly tell the compiler to treat an entity as other type
let cid = 1;
// 1st Way:
// let customerId = <number> cid
let customerId = cid;
customerId = 8; //We are expecting a number. 
//Functions
//With return values
function addNum(x, y) {
    return x + y;
}
console.log('Sum', addNum(1, 2));
//Without return
function log(message) {
    console.log(message);
}
log('test from log');
const user1 = {
    id: 1,
    name: 'Joan'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const joan = new Person(1, 'Joan');
const jose = new Person(1, 'Jose');
console.log(joan.register());
console.log(joan, jose);
class PersonInt {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//Extend classes or subclasses
class Employee extends PersonInt {
    constructor(id, name, jobRole) {
        super(id, name);
        this.jobRole = jobRole;
    }
}
const emp = new Employee(3, 'Test employee', 'Automation Engineer');
console.log(emp.register());
//Generics -> create reusable components and the T will be a place holder.
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let srtArray = getArray(['Joan', 'Jose', 'Maria']);
// numArray.push('hello')
