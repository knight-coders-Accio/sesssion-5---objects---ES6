// Destructuring

// let arr = [10, 20, 30]

// let a = arr[0]

// let b = arr[1]

// let c = arr[2]

// let [a,b,c] = arr

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let [,,c] = arr

// console.log(c)




// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let x = obj.a
// let y = obj.b
// let z = obj.c

// let {a:x, b:y, c:z} = obj

// let x = obj.a
// let y = obj.b
// let z = obj.c

// console.log(x, y, z)

// let { b:y, c:z} = obj

// console.log(y, z)


let obj = {
    a: 10,
    b: 20,
    c: 30
}

// let a = obj.a
// let b = obj.b
// let c = obj.c

// let {a:a, b:b, c:c} = obj

let {a, b, c} = obj

console.log(a, b, c)