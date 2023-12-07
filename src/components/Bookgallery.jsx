import Book from "./Book";
import "../Bookgallery.css"
import { bookInfo } from "../book";

export default function Bookgallery() {
    return (
        <div className="book-components-container">
            {bookInfo.map((book, index) => {
                console.log(index);
                const { title, src, author, theme, date } = book;
                return <Book key={index} bookInfo={{ title, src, author, theme, date }} />;
            })}
        </div>
    );
}

