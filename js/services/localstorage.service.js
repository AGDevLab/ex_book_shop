'use strict'

function saveToStorage(key, value) {
  const valueStr = JSON.stringify(value)
  localStorage.setItem(key, valueStr)
}

function loadFromStorage(key) {
  const elData = localStorage.getItem(key)
  JSON.parse(elData)
  //   console.log(elData)
  return elData
}

function clearStorage(key) {
  localStorage.removeItem(key)
}
