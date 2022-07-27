const Title = document.querySelector('#Title').value;
const Author = document.querySelector('#Author').value;
const addBookBtn = document.querySelector('#add_book_btn')




//add a book function to collection 
const addBook = () => {
    
    let storageForBooks = JSON.parse(window.localStorage.getItem('books'));
    if (storageForBooks === null) {
        storageForBooks = []
    }

    const title = document.querySelector('#Title').value;
    const author = document.querySelector('#Author').value;
    const newBook = {
        // id: string(list_of_books.length), 
        title,
        author
    };
    storageForBooks.push(newBook)
    window.localStorage.setItem('books', JSON.stringify(storageForBooks))

    displayingBook(newBook)

    const displayBookInPage = document.querySelector('#store_books');
    const oneBook = document.createElement('div');
    
    console.log(newBook)

}


const displayingBook = (book) => {
    const titleDisplay = document.querySelector('.titleDisplay')
    const authorDisplay = document.querySelector('.authorDisplay')
    const removeDisplay = document.querySelector('.removeDisplay')

    titleDisplay.textContent = book.title;
    authorDisplay.textContent = book.author;
    console.log(book.title)
}

addBookBtn.addEventListener('click', () => {
    addBook()
});



// Create a function to add a new book to the collection, with title and author.


//get input values from form field 
//push values to dom and display in browser when add btn clicked 
//push values to dom and display in collections array when add btn clicked 

