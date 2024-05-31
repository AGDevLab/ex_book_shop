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
            <td class="name">${book.title}</td>
            <td>${book.price}</td>
            <td>
              <button onclick="onGetBook('${book.id}')
              
              ">Read</button
              ><button onclick="onUpdateBook('${book.id}')">update</button
              ><button onclick="onRemoveBook('${book.id}')">delete</button>
            </td>
          </tr>`
  )
  elBookShelf.innerHTML = strBookHtmls.join('')
}

// DONE: read book from model
function onGetBook(bookId) {
  const elBook = getBooks(bookId)
  const elModal = document.querySelector('.modal')
  elModal.classList.remove('hidden')
  const elPre = (document.querySelector('pre').innerText = elBook)
}

function onCloseModal() {
  const elModal = document.querySelector('.modal')
  elModal.classList.add('hidden')
}

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
