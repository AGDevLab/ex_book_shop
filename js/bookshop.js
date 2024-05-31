'use strict'

var gBooks = [
  {
    id: 'bg4J78',
    title: 'The adventures of Lori Ipsi',
    price: 120,
    imgUrl: 'lori-ipsi.jpg',
  },
  {
    id: 'bg4J79',
    title: 'World Atlas',
    price: 300,
    imgUrl: 'worldatlas.jpg',
  },
  {
    id: 'bg4J80',
    title: 'Zorba the Greek',
    price: 87,
    imgUrl: 'zorba.jpg',
  },
]

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
              <button onclick="getBooks('${book.id}')">Read</button
              ><button onclick="onUpdateBook('${book.id}')">update</button
              ><button onclick="onRemoveBook('${book.id}')">delete</button>
            </td>
          </tr>`
  )
  elBookShelf.innerHTML = strBookHtmls.join('')
}

// DONE: read book from model
function getBooks(bookId) {
  console.log('reading')
  const book = gBooks.find((book) => book.id === bookId)
  console.log(book)
}
// DONE: remove book from bookshelf (MODEL + DOM)
function onRemoveBook(bookId) {
  // MODEL
  const idx = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(idx, 1)

  // DOM
  renderBooks()
}

function removeBook() {}

// DONE: change price of book (MODEL + DOM)
function onUpdateBook(bookId) {
  // MODEL
  var priceChange = +prompt('please choose a price')
  const idx = gBooks.findIndex((book) => book.id === bookId)
  gBooks[idx].price = priceChange

  // DOM
  renderBooks()
}

function updatePrice(bookPrice) {}

// DONE: add a new book (MODEL + DOM)
function onAddBook() {
  // MODEL
  var elNewBook = document.querySelector('input')
  const txt = elNewBook.value
  const book = {
    id: `${Date.now() % 1000}`,
    title: txt,
    price: '',
    imgUrl: `${txt}.jpg`,
  }
  gBooks.unshift(book)

  // DOM
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
