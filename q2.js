let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};

// print the book whose author is "George Orwell"

let books1 = library.books;

let given_author = "George Orwell";

// books1 = [{  }, {  }]


for(let t of books1){
//    console.log(t)
  if(t.author == given_author){
    console.log(t)
  }
}