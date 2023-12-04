function Book() {
    const authorName = "Arundhati Roy";
    const bookName = "God of small things";
    const publishedDate = 1997;
    const mainThemeOfBook = "The God of Small Things, novel written by Arundhati Roy, published in 1997. Set in Kerala in the 1960s, this Booker Prize winner follows Ammu's family through both ordinary and tragic events, focusing most memorably on her “two-egg twins,” Estha and Rahel.";
    // function handleclick() {
        // confirm("Do you want to buy the book")
    // }
    return (
        <>
            <div className="book-container">

                <img src="https://source.unsplash.com/user/wsanter" alt="" />
                <h1>{bookName} </h1>
                <p>{mainThemeOfBook}</p>
                <div className="book-metadata">
                    <p >author</p>
                    <p>{authorName}</p>
                </div>
                <div className="book-metadata">
                    <p>published on</p>
                    <p>{publishedDate}</p>
                </div>
                <div className="book-info ">
                    <button  className="btn buy-book-btn">Buy Book </button>
                    <a href="https://www.britannica.com/topic/The-God-of-Small-Things" className="btn read-more-btn">Read more</a>
                </div>
            </div>

        </>
    );
}
export default Book;