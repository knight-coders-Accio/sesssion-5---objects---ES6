// crerate a new object "resume" which will have all the above objects as properties

// let personalDetails = {
//     name: "John",
//     age: 30,
//     city: "Delhi"
// }

// let medicalHistory = {
//     disease: "Fever",
//     treatment: "Paracetamol"
// }

// let  experiece = {
//     company: "Google",
//     years: 5
// }

// let  resume = {}

// for(let t in  personalDetails){
//     console.log(t, personalDetails[t]) 
//     // resume[t] = personalDetails[t]
//     k = t
//     v = personalDetails[t]

//     resume[k] = v

//     // let k = "name" 
//     // let v = personalDetails.name // personalDetails["name"]

//     // resume.name = v
//     // resume[k] = v
// }


// for(let m in medicalHistory){
//     k = m 
//     v = medicalHistory[m]
//     resume[k] = v
// }

// for(let e in experiece){
//     k = e 
//     v = experiece[e]
//     resume[k] = v
// }

// console.log(resume)



// let bat = {
//     height : 10,
// }

// let obj = {} // {height: 10}

// // obj.a = 100
// let k = "height"
// let v = bat[k]
// // obj.height = 10
// obj[k] = v








let personalDetails = {
    name: "John",
    age: 30,
    city: "Delhi"
}

let medicalHistory = {
    disease: "Fever",
    treatment: "Paracetamol"
}

let  experiece = {
    company: "Google",
    years: 5
}


let resume = {...personalDetails, ...medicalHistory, ...experiece}

console.log(resume)
// let  resume = {
//     p : personalDetails,
//     m : medicalHistory,
//     e : experiece
// }

// console.log(resume)


// update came in 2015 in JS => es6

// let arr1 = [5,10,15,20,25]
// let arr2 = [6,12,18,24,30]
// // spread operator
// let arr3 = [100, ...arr1, 200,300, ...arr2]

// console.log(arr3)

// spread operator