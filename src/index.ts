//Basic Types
let id: number = 5
let company: string = 'Joanmedia'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4]
let arr: any[] = [1,true,'test',3]

//Tupple -> will define specific types to an array.

let person: [number, string, boolean] = [1, 'Joan', true]
let employee: [number, string][] // Array of tupples

employee = [
    [1, 'Name 1'],
    [2, 'Name 2'],
    [3, 'Name 3']
]

//Union

//Or string or number
let pid: string | number = 22

//Enum -> create constants(Create a numeric value for each of them) By defaul
//Up will start will 0, but you can assign it other one like Up = 1
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Down)
console.log(Direction2.Right)

//Objects

//You can create an object like this, but also you can create a type:
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'Joan'
// }

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Joan'
}

// Type Assertion -> Explicitly tell the compiler to treat an entity as other type
let cid: any = 1
// 1st Way:
// let customerId = <number> cid
let customerId = cid as number

customerId = 8 //We are expecting a number. 

//Functions

//With return values
function addNum(x: number, y:number): number{
    return x + y;
}

console.log('Sum', addNum(1,2))


//Without return
function log(message: string | number): void {
    console.log(message)
}

log('test from log')

//Interfaces -> kind of custom type, 

//? would be optional.
interface UserInteface{
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInteface = {
    id: 1,
    name: 'Joan'
}

//Type -> Primities and unions
type Point = number | string

//Interface -> Can be used with objects & functions

interface MathFunc {
    (x: number, y: number):number
}

const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y

//Classes

class Person {
    id: number
    private name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    
    register(){
        return `${this.name} is now registered`
    }
}

const joan = new Person(1, 'Joan')
const jose = new Person(1, 'Jose')

console.log(joan.register())

console.log(joan, jose)

//Interfaces + Classes

interface PersonInteface{
    id: number,
    name: string,
    register(): string
}

class PersonInt implements PersonInteface{
    
    //We can also have access modifiers-> Private and protected
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    
    register(){
        return `${this.name} is now registered`
    }
}

//Extend classes or subclasses

class Employee extends PersonInt{
    jobRole: string

    constructor(id: number, name: string, jobRole:string){
        super(id,name)
        this.jobRole = jobRole
    }
}

const emp = new Employee(3, 'Test employee', 'Automation Engineer')

console.log(emp.register())

//Generics -> create reusable components and the T will be a place holder.
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let srtArray = getArray<string>(['Joan', 'Jose', 'Maria'])

// numArray.push('hello')