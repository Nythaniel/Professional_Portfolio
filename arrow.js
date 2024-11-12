function greet()
{
    return "hi"; 
}
console.log(greet()); 

const greet = () => "hello"
console.log(greet()); 

const square = n => n*n;
console.log(square(4)); 

const add = (a,b) => a+b;
console.log(add(9,10));

const sayHi = (name = "friend") => `hello, ${name}`
console.log(sayHi("person"))

const createPerson = (name,age) => {name, age}
console.log("Nythaniel" , 19); 

const double = n => n*2
console.log(double(4));

const multiplyAndAdd = (a,b) => (a*b)+5; 
console.log(multiplyAndAdd(10,9))

const base = [2,4,6,9]
const double2 = 2
const doubledNumbers = priceUSD.map(price => price * conversion)
console.log(doubledNumbers) 

const num = [0, 1, 1.5, 2, 10, 9]
const keep = num.filter(num => num > 2)
console.log(keep)

const Big = [20, 30, 40, 50]
const reduce = Big.reduce((accumulator, Big) => accumulator * Big, 0)
console.log(reduce) 