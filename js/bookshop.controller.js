'use strict'

function onInit() {
  console.log('onInit')
  // gBooks = _createBooks('bookshelf')
  renderBooks()
  onRenderStats(gBooks)
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

  // MODAL
  onAction('removeBook')

  // STATS
  onRenderStats(gBooks)
}

// DONE: change price of book (MODEL + DOM)
function onUpdateBook(bookId) {
  // MODEL
  updatePrice(bookId)

  // DOM
  renderBooks()

  // MODAL msg
  onAction('updateBook')

  // STATS
  onRenderStats(gBooks)
}

function onInputHandler(event) {
  const typeStr = event.target.value.toLowerCase()
  const matchedBook = gBooks.filter((book) =>
    book.title.toLowerCase().startsWith(typeStr)
  )
  if (matchedBook.length !== 0) {
    console.log(matchedBook)
    gBooks = matchedBook
    console.log(gBooks)
  }

  renderBooks()
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
  if (!bookName) return
  var elNewBook = document.querySelector('input')
  const addBookBox = elNewBook.value
  addBook(addBookBox)

  // DOM
  elNewBook.value = ''
  renderBooks()

  // MODAL
  onAction('addBook')

  // STATS
  onRenderStats(gBooks)
}

function onSearchBook() {
  searchBook()

  renderBooks()
}

function onRenderStats(books) {
  updateStats(books)
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

function onAction(action) {
  const elModal = document.querySelector('.modal')
  const elPre = document.querySelector('pre')
  switch (action) {
    case 'addBook':
      elPre.innerText = 'Book added'
      console.log('success')
      break
    case 'removeBook':
      elPre.innerText = 'Book removed'
      console.log('removed')
      break
    case 'updateBook':
      elPre.innerText = 'Price updated'
      console.log('pricechange')
      break
  }
  elModal.showModal()
  setTimeout(hideModal, 2000)
}

function hideModal() {
  const elModal = document.querySelector('.modal')
  elModal.close()
}
