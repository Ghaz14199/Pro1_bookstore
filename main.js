let books = [];


function addBook(bookId, title, author, price, quantity) {
    let book = {
        bookId: bookId,
        title: title,
        author: author,
        price: price,
        quantity: quantity
    };
    books.push(book);
    console.log(`تمت إضافة الكتاب: ${title}`);
}

// عرض البيانات
function displayBooks() {
    console.log(" الكتب:");
    for (let i = 0; i < books.length; i++) {
        console.log(`Book ID: ${books[i].bookId}, Title: ${books[i].title}, Author: ${books[i].author}, Price: ${books[i].price}, Quantity: ${books[i].quantity}`);
    }
}
//استعلام
function queryBook(query, type) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][type] === query) {
            console.log(`تم العثور على الكتاب: ${books[i].title}`);
            return books[i];
        }
    }
    console.log(`لم يتم العثور على الكتاب ة ${type}: ${query}`);
    return null;
}


function sell(title, quantity, balanc) {
    let book = queryBook(title, 'title');

    if (book && book.quantity >= quantity && book.price * quantity <= balanc) {
        
        book.quantity -= quantity;
        console.log(`${quantity} ${title}`);

    } 
}
