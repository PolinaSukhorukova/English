import { useParams } from 'react-router-dom';

export const Book = () => {
    const { bookId = '' } = useParams();
    return (
        <div className="book">
            <div className="wrapper">
                <div className="book__content">
                    <h1 className="book__title">Book #{bookId}</h1>
                </div>
            </div>
        </div>
    )
}