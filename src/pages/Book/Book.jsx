import { useParams } from 'react-router-dom';
import { getBook } from '../../utils/getBook';
import HTMLFlipBook from "react-pageflip";
import first from '../../files/books/1/1.jpg'
import second from '../../files/books/1/2.jpg'
import third from '../../files/books/1/3.jpg'
import fourth from '../../files/books/1/4.jpg'
import fifth from '../../files/books/1/5.jpg'
import sixth from '../../files/books/1/6.jpg'

export const Book = () => {
    const { bookId = '' } = useParams();
    const book = getBook(+bookId);
    const availableImages = book.pages.map((page) => `/files/books/${book.id}/${page}.jpg`);
    console.log(availableImages)
    return (
        <div className="book">
            <div className="wrapper">
                <div className="book__content">
                    <h1 className="book__title">Book {book.name}</h1>
                    <HTMLFlipBook width={400} height={600}>
                        <div className="demoPage"></div>
                        <div className="demoPage"><img className="page__content" src={first} alt="1"></img></div>
                        <div className="demoPage"><img className="page__content" src={second} alt="1"></img></div>
                        <div className="demoPage"><img className="page__content" src={third} alt="1"></img></div>
                        <div className="demoPage"><img className="page__content" src={fourth} alt="1"></img></div>
                        <div className="demoPage"><img className="page__content" src={fifth} alt="1"></img></div>
                        <div className="demoPage"><img className="page__content" src={sixth} alt="1"></img></div>
                        <div className="demoPage"></div>
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    )
}