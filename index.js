
let myLibrary = [];

let title = document.getElementById('title-name') //input box
let author = document.getElementById('author-name')
let pages = document.getElementById('pages')
let checkBox = document.getElementById('defaultCheck1')
let addBook = document.getElementById('addbook')
let display = document.getElementById('displayBooks')

 // object constructer
function Book(book_title,book_author,book_pages,book_checked) {
  this.book_title =book_title
  this.book_author = book_author
  this.book_pages =book_pages
  this.book_checked = book_checked
  
}
// let index=0;
const createBook = (book)=>{
    
 console.log(book)
  const bookCard = document.createElement('div')
  const title_text = document.createElement('h3')
  const author_text = document.createElement('h3')
  const pages_text = document.createElement('h3')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  bookCard.classList.add('book_card')
  readBtn.classList.add('book_card_btn')
  removeBtn.classList.add('book_card_btn')
readBtn.addEventListener('click', toggleRead);
removeBtn.addEventListener('click',removeBook);

  title_text.textContent = ` Book : ${book.book_title} `
  author_text.textContent = `Author : ${book.book_author} `
  pages_text.textContent = `pages : ${book.book_pages} `
  removeBtn.textContent = 'Remove'

  if (book.book_checked) {
    readBtn.textContent = 'Read'
    readBtn.style.backgroundColor = 'yellow';
    //readBtn.classList.add('btn-light-green')
  } else {
    readBtn.textContent = 'Not read'
    readBtn.style.backgroundColor = 'red';
    //readBtn.classList.add('btn-light-red')
  }

  bookCard.appendChild( title_text)
  bookCard.appendChild(author_text)
  bookCard.appendChild(pages_text)
  bookCard.appendChild(readBtn)
  bookCard.appendChild(removeBtn)
  display.appendChild(bookCard)

// index++;

}

//Add book button
 addBook.addEventListener('click',addBookToLibrary)



function addBookToLibrary() {

  let newBook = new Book(title.value,author.value,pages.value,checkBox.checked);
  //console.log(newBook);
  myLibrary.push(newBook);
  console.table(myLibrary);
  createBook(newBook);
}


const toggleRead=(e)=>{
if(e.target.textContent==='Read'){
  e.target.textContent='Not Read';
  e.target.style.backgroundColor = 'red';
}else{
  e.target.textContent = 'Read';
  e.target.style.backgroundColor = 'yellow';
}
}

const removeBook=(e)=>{
 let parent =document.getElementById('displayBooks');
 let child = e.target.parentElement;
console.log(parent,child);
parent.removeChild(child);
}