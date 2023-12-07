import PropTypes from "prop-types";


function Book(props) {
    const { src, title, theme, author, date } = props.bookInfo;
    console.log(src)

    return (
        <>
            <div className="book-container">

                <img src={src} alt="" />
                <h1>{title}</h1>
                <p>{theme}</p>
                <div className="book-metadata">
                    <p>author</p>
                    <p>{author}</p>
                </div>
                <div className="book-metadata">
                    <p>published on</p>
                    <p>{date}</p>
                </div>
                <div className="book-info">
                    <button className="btn buy-book-btn">Buy Book </button>
                    <a
                        href="https://www.britannica.com/topic/The-God-of-Small-Things"
                        className="btn read-more-btn"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </>
    );
}

// PropTypes validation
Book.propTypes = {
    bookInfo: PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        theme: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default Book;
