// q1:
let student = {
    name: "Rahul",
    age: 21,
    courses: ["Math", "Physics"]
};

//  remove "Physics" course

let courses1 = student.courses  // ["Math", "Physics"]
console.log("initial",courses1)
courses1.pop()

console.log("final",courses1)



// add a new course => "Chemistry" 

courses1.push("Chemistry")

console.log(student)




// q2:
let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};

// print the book whosse author is "George Orwell"


// q3:

let cart = {
    owner: "Abhishek",
    items: [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Mouse", price: 500, quantity: 0 },
        { name: "Keyboard", price: 1000, quantity: 2 },
        { name: "Monitor", price: 10000, quantity: 1}
    ]
};


//  remove an item from cart if quantity is zero

// calculate the total price of all items in cart


// q4: 

// create an array of object , each objects will have name and age of a person
// print the name of the person who are eligible to vote (age >= 18)


// q5:

let personalDetails = {
    name: "John",
    age: 30,
    city: "Delhi"
};

let medicalHistory = {
    disease: "Fever",
    treatment: "Paracetamol"
};

let  experiece = {
    company: "Google",
    years: 5
};


// crerate a new object "resume" which will have all the above objects as properties


<!-- let resume = {
     name: "John",
    age: 30,
    city: "Delhi",
    disease: "Fever",
    treatment: "Paracetamol"
    company: "Google",
    years: 5
} -->
