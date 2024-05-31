'use strict'

function onInit() {
  console.log('onInit')
  renderBooks()
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
}

// DONE: change price of book (MODEL + DOM)
function onUpdateBook(bookId) {
  // MODEL
  updatePrice(bookId)

  // DOM
  renderBooks()
}

// DONE: add a new book (MODEL + DOM)
function onAddBook(ev) {
  ev.preventDefault()
  // MODEL
  var elNewBook = document.querySelector('input')
  const addBookBox = elNewBook.value
  addBook(addBookBox)

  // DOM
  elNewBook.value = ''
  renderBooks()
}

// function renderTodos() {
//   const elTodoList = document.querySelector('.todo-list')
//   const todos = getTodos(gFilterBy)

//   const strHtmls = todos.map(
//     (todo) => `
//       <li onclick="onToggleTodo('${todo.id}')">
//           <span class=${todo.isDone ? 'done' : ''}>${todo.txt}</span>
//           <button onclick="onShowDetails(event, '${todo.id}')">Details</button>
//           <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
//       </li>`
//   )

//   elTodoList.innerHTML = strHtmls.join('')
//   renderStats()
// }
