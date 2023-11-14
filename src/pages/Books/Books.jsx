import books from '../../files/books/books.json'
import { Link } from 'react-router-dom'
export const Books = () => {

    return (
        <div className="">
            Books
            {books.map((book) => {
                return (
                    <Link to={`/books/${book.id}`}>
                        {book.title}
                  </Link>
                )
            })}
        </div>
    )
}