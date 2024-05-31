'use strict'

var gBooks = [
  {
    id: 'bg4J78',
    title: 'crashingthrough',
    price: 120,
    imgUrl: 'crashingthrough.jpg',
  },
  {
    id: 'bg4J79',
    title: 'shadowdivers',
    price: 300,
    imgUrl: 'shadowdivers.jpg',
  },
  {
    id: 'bg4J80',
    title: 'submerged',
    price: 87,
    imgUrl: 'submerged.jpg',
  },
]

function getBooks(bookId) {
  const book = gBooks.find((book) => book.id === bookId)
  return JSON.stringify(book, null, 2)
}

function addBook(txt) {
  const book = {
    id: `${Date.now() % 1000}`,
    title: txt,
    price: '',
    imgUrl: `returnnull.jpg`,
    // imgUrl: `${txt}.jpg`,
  }
  gBooks.unshift(book)
}

function removeBook(bookId) {
  const idx = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(idx, 1)
}

function updatePrice(bookId) {
  var priceChange = +prompt('please choose a price')
  const idx = gBooks.findIndex((book) => book.id === bookId)
  gBooks[idx].price = priceChange
}
