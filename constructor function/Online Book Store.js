// ONLINE BOOKSTORE
// Task: Design an online bookstore system using object-oriented principles.
// Instructions:
// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.
// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.

function Author(name,birthYear,nationality){

    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;
}

function Book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price;
}

Book.prototype.getBookInfo=function(){
    console.log(`Title :${this.title}`);
    console.log(`Authro's name : ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price : ${this.price}`)
}
let author1=new Author("Patrick Rothfuss",1990,"United State")
let author2=new Author("Frank Herbert",1770,"United State")

let book1=new Book( "The Name of the Wind",author1, "Fantasy","40 Dollor")
let book2=new Book("Dune",author2,"Science Fiction","30  Dollor")

let bookStore=[book1,book2];
bookStore.forEach((ele) =>
ele.getBookInfo() )


