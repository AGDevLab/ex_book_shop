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

function getBooks(bookId) {
  const book = gBooks.find((book) => book.id === bookId)
  return JSON.stringify(book, null, 2)
}

function addBook(txt) {
  const book = {
    id: `${Date.now() % 1000}`,
    title: txt,
    price: '',
    imgUrl: `${txt}.jpg`,
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
