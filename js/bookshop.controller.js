'use strict'

function onInit() {
  console.log('onInit')
  renderBooks()
  // clearStorage('bookshelf')
  // saveToStorage('bookshelf', gBooks)
}
// Render DOM
function renderBooks() {
  const elBookShelf = document.querySelector('.books')
  const strBookHtmls = gBooks.map(
    (book) => `<tr> 
            <td class="title">${book.title}</td>
            <td class="price">${book.price}</td>
            <td class="menu">
              <button class='btnRead'  onclick="onGetBook('${book.id}')
              
              ">Read</button
              ><button class='btnUpdate'  onclick="onUpdateBook('${book.id}')">update</button
              ><button class='btnDelete'  onclick="onRemoveBook('${book.id}')">delete</button>
            </td>
          </tr>`
  )
  elBookShelf.innerHTML = strBookHtmls.join('')
}

// DONE: read book from model
function onGetBook(bookId) {
  const elBook = getBooks(bookId)
  const elModal = document.querySelector('.modal')
  elModal.showModal()
  const elPre = document.querySelector('pre')
  elPre.innerText = elBook
  const imgFileName = JSON.parse(elBook)
  const elBookCover = document.querySelector('.modalImg')
  elBookCover.innerHTML = `<img src="assets/img/${imgFileName.imgUrl}" alt="" />`
}

// function onCloseModal() {
//   const elModal = document.querySelector('.modal')
//   elModal.close()
// }

// DONE: remove book from bookshelf (MODEL + DOM)

function onRemoveBook(bookId) {
  // MODEL
  removeBook(bookId)

  // DOM
  renderBooks()

  // Local Storage
}

// DONE: change price of book (MODEL + DOM)
function onUpdateBook(bookId) {
  // MODEL
  updatePrice(bookId)

  // DOM
  renderBooks()
}

function onInputHandler(event) {
  console.log('Character typed:', event.target.value)
}

function onTypeSearch(ev) {
  console.log(ev)
}

// DONE: add multiple button support (MODEL + DOM)
function onSubmitHandler(event) {
  event.preventDefault()

  const clickedButtonId = event.submitter.id

  if (clickedButtonId === 'addButton') {
    onAddBook()
  } else if (clickedButtonId === 'searchButton') {
    onSearchBook()
  } else if (clickedButtonId === 'clearButton') {
    onClearSearch()
  }
}

function onAddBook() {
  const bookName = document.getElementById('bookName').value
  console.log('Add book:', bookName)
  var elNewBook = document.querySelector('input')
  const addBookBox = elNewBook.value
  addBook(addBookBox)

  // DOM
  elNewBook.value = ''
  renderBooks()
}

function onSearchBook() {
  searchBook()

  renderBooks()
}

function onClearSearch() {
  var elNewBook = document.querySelector('input')
  //MODEL
  clearSearch()
  // gBooks = _createBooks('bookshelf')

  // DOM
  elNewBook.value = ''
  renderBooks()
}

// DONE: add a new book (MODEL + DOM)
// function onAddBook(ev) {
//   ev.preventDefault()
//   // MODEL
//   var elNewBook = document.querySelector('input')
//   const addBookBox = elNewBook.value
//   addBook(addBookBox)

//   // DOM
//   elNewBook.value = ''
//   renderBooks()
// }
