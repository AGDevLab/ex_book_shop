'use strict'

// loadFromStorage('bookshelf')
var gBooks = _createBooks('bookshelf')
// var gBooks = [
//   {
//     id: 'bg4J78',
//     title: 'crashingthrough',
//     price: 120,
//     imgUrl: 'crashingthrough.jpg',
//   },
//   {
//     id: 'bg4J79',
//     title: 'shadowdivers',
//     price: 300,
//     imgUrl: 'shadowdivers.jpg',
//   },
//   {
//     id: 'bg4J80',
//     title: 'submerged',
//     price: 87,
//     imgUrl: 'submerged.jpg',
//   },
// ]
// console.log(gBooks)

function getBooks(bookId) {
  const book = getBook(bookId)
  // const book = gBooks.find((book) => book.id === bookId)
  return JSON.stringify(book, null, 2)
}

function getBook(bookId) {
  return gBooks.find((book) => book.id === bookId)
}

function searchBook() {
  const bookName = document.getElementById('bookName').value
  console.log('Search book:', bookName)
  const searchRes = findBookByName(`${bookName}`)
  console.log(searchRes)
  gBooks = gBooks.filter((book) => book === searchRes)
  console.log(gBooks)
}

function findBookByName(titleStr) {
  return gBooks.find((book) => book.title === titleStr)
}

function findBookPrice(priceStr) {
  return gBooks.find((book) => book.price === priceStr)
}

function addBook(txt) {
  const book = _createBook(txt)
  gBooks.unshift(book)
  _saveBooks()
}

function clearSearch() {
  gBooks = _createBooks('bookshelf')
}

function removeBook(bookId) {
  const idx = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(idx, 1)
  _saveBooks()
}

function updatePrice(bookId) {
  var priceChange = +prompt('please choose a price')
  const idx = gBooks.findIndex((book) => book.id === bookId)
  if (priceChange === 0) {
    alert('cannot be 0')
    return null
  } else gBooks[idx].price = priceChange
  _saveBooks()
}

function _createBook(txt) {
  return {
    id: makeId(),
    title: txt,
    price: '1',
    // price: `${findBookByName(txt).price}`,
    imgUrl: `returnnull.jpg`,
  }
}

function _createBooks(key) {
  const dataStr = loadFromStorage(key)
  // console.log(dataStr)

  const data = JSON.parse(dataStr)
  // console.log(data)
  return data

  // return [
  //   {
  //     id: 'bg4J78',
  //     title: 'crashingthrough',
  //     price: 120,
  //     imgUrl: 'crashingthrough.jpg',
  //   },
  //   {
  //     id: 'bg4J79',
  //     title: 'shadowdivers',
  //     price: 300,
  //     imgUrl: 'shadowdivers.jpg',
  //   },
  //   {
  //     id: 'bg4J80',
  //     title: 'submerged',
  //     price: 87,
  //     imgUrl: 'submerged.jpg',
  //   },
  // ]
}
// _saveBooks()

function _saveBooks() {
  saveToStorage('bookshelf', gBooks)
}

function _readBooks() {
  const tempStr = loadFromStorage('bookshelf')
  const tempData = JSON.parse(tempStr)
  console.log(tempData)
}

function getTotalbookCount() {
  return gBooks.length
}

function updateStats(books) {
  const stats = countBooksByPrice(books)
  const elStatsFooter = document.querySelector('footer')
  const elStatTotal = elStatsFooter.querySelector('.total')
  const elStatExp = elStatsFooter.querySelector('.expensive')
  const elStatAvg = elStatsFooter.querySelector('.average')
  const elStatChp = elStatsFooter.querySelector('.cheap')
  const elStatNrd = elStatsFooter.querySelector('.notReady')

  elStatTotal.innerText = gBooks.length
  elStatExp.innerText = stats.expensive
  elStatAvg.innerText = stats.average
  elStatChp.innerText = stats.cheap
  elStatNrd.innerText = stats.notReady
}

function countBooksByPrice(books) {
  const count = {
    expensive: 0,
    average: 0,
    cheap: 0,
    notReady: 0,
  }

  books.forEach((book) => {
    const price = book.price
    if (price >= 200) {
      count.expensive++
    } else if (price > 80) {
      count.average++
    } else if (price > 1) {
      count.cheap++
    } else if (price > 0) {
      count.notReady++
    }
  })

  return count
}
