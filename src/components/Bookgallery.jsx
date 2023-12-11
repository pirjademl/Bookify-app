import Book from "./Book";
import '../utils/Bookgallery.css';
import { bookInfo } from "../book";

export default function Bookgallery() {
    return (
        <div className="book-components-container">
            {bookInfo.map((book, index) => {

                return <Book key={index} bookInfo={{ ...book}} />;
            })}
        </div>
    );
}

