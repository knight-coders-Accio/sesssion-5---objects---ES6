
//  remove an item from cart if quantity is zero
// calculate the total price of all items in cart
let cart = {
    owner: "Abhishek",
    items: [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Mouse", price: 500, quantity: 0 },
        { name: "Keyboard", price: 1000, quantity: 2 },
        { name: "Monitor", price: 10000, quantity: 10}
    ]
};

// 50000*1 + 500*0 + 1000*2 + 10000*10


let itemsArray = cart.items;

let itemToBeDeleted 

for(let i = 0; i < itemsArray.length; i++){
    if(itemsArray[i].quantity == 0){
       itemToBeDeleted = i;
    } 
}

// [10,20,30,40,]

let sum = 0
for(let i = 0; i < itemsArray.length; i++){
     sum = sum+ itemsArray[i].price* itemsArray[i].quantity;
}
console.log(sum)



