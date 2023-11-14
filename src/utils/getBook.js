
import books from '../files/books/books.json'

export function getBook(bookId) {
  return books.find(book => book.id === bookId)
}