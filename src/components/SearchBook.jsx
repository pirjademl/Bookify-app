import { bookInfo } from '../book';
import '../utils/searchbook.css';
import { useState } from 'react';
import Book from './Book';

export default function SearchBook() {
    const [search, setSearch] = useState('');         // State to store the search input
    const [foundBook, setFoundBook] = useState(null);   // State to store the found book

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const foundBook = bookInfo.find((book) => book.title === search);
        if (foundBook) {
            setFoundBook(foundBook);
        }
        else {
            setFoundBook("");
        }
    };

    return (
        <div className="search-form-container">
            <form onSubmit={handleSubmit}>
                <div className="search-form-wrapper">
                    <h1 className='heading'>Enter the title of the book you want to search </h1>
                    <input name='search' value={search} onChange={handleChange} className='search-field' type="text" placeholder="Enter the title of the book" />
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </div>
            </form>

            {/* Render the Book component conditionally */}
            {foundBook ? <Book key={foundBook.id} bookInfo={foundBook} /> : <p>Book not found</p>}
        </div>
    );
}
