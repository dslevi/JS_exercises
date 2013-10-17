var BookList = function(nextBook, currentBook, lastBook, bookShelf) {
    this.count = function(tval) {
        var num = 0;
        for (var i = 0; i < this.bookShelf.length; i++) {
            if (tval === bookShelf[i].read) {
                num ++;
            }
        }
        return num;
    };
    this.booksRead = function() {
        return this.count(true);
    };
    this.unreadBooks = function() {
        return this.count(false);
    };
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.bookShelf = bookShelf;
    this.add = function(book) {
        this.bookShelf.push(book);
    };
    this.next = function() {
        for (var i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].read == false) {
                return this.bookShelf[i];
            }
        }
    };     

    this.finishCurrentBook = function() {
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.next();          
    };
}

var Book = function(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate; 
}

var PrideAndPrejudice = new Book("Pride and Prejudice", "classic", "Jane Austen", true, new Date(2012, 9, 1)); 
var Emma = new Book("Emma", "classic", "Jane Austen", false); 
var Persuasion = new Book("Persuasion", "classic", "Jane Austen", false); 
var Hitchhikers = new Book("Hitchikers Guide", "Scifi", "Douglas Adams", false); 
var GameOfThrones = new Book("Game of Thrones", "Fantasy", "George RR Martin", false);
var ClashOfKings = new Book("Clash of Kings", "Fantasy", "George RR Martin", true, new Date(2001, 2, 20));  
var Hidi_Library = new BookList(Hitchhikers, GameOfThrones, Persuasion, [PrideAndPrejudice, Emma, Persuasion, Hitchhikers, GameOfThrones, ClashOfKings]);

console.log(Hidi_Library);

