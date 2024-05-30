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

function renderBooks() {
  const elBookShelf = document.querySelector('.books')
  console.log(elBookShelf)

  elBookShelf.innerHTML = `<tr>
            <td class="name">The adventures of Lori Ipsi</td>
            <td>120</td>
            <td>
              <button onclick="getBooks(101)">Read</button
              ><button onclick="onUpdateBook()">update</button
              ><button onclick="onRemoveBook()">delete</button>
            </td>
          </tr>`
}

function getBooks(bookId) {
  console.log('reading')
  console.log(bookId)
}

function onRemoveBook() {
  console.log('book removed')
}

function removeBook() {
  console.log('removing')
}

function onUpdateBook() {
  console.log('updating')
}

function updatePrice() {}

function onAddBook() {
  console.log('Adding book')
}

function renderTodos() {
  const elTodoList = document.querySelector('.todo-list')
  const todos = getTodos(gFilterBy)

  const strHtmls = todos.map(
    (todo) => `
      <li onclick="onToggleTodo('${todo.id}')">
          <span class=${todo.isDone ? 'done' : ''}>${todo.txt}</span>
          <button onclick="onShowDetails(event, '${todo.id}')">Details</button>
          <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
      </li>`
  )

  elTodoList.innerHTML = strHtmls.join('')
  renderStats()
}
