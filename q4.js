// q4: 

// create an array of object , each objects will have name and age of a person
// print the name of the person who are eligible to vote (age >= 18)


// let arr = [{name:""} , {} , {}]

// create samdat data array of objects 

let persons = [
    {name:"Abhishek", age: 20}, 
    {name:"Rahul", age: 15}, 
    {name:"Rohit", age: 25}, 
    {name:"Raj", age: 30}
]

for(let t of persons){
      if(t.age >= 18){
        console.log(t.name, "is eligible to vote")
      }
}

