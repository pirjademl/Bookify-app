import working from '../assets/working.gif'
import fiction from '../assets/fictionBooks.png';
import astronomer from '../assets/literature.jpg';
import buisnessFiction from '../assets/buisness.jpg';
import history from '../assets/history.jpg';
import tech from '../assets/tech.jpg';
import books from '../assets/books.jpg';
import programming from '../assets/programming.jpg';
import khalidbinwalid from '../assets/khalid.jpg';

import '../utils/homepage.css';

export default function Homepage() {
    return (
        <>
            
            <div className='hero-container'>
                <div className="hero-wrapper">

                    <div className='hero-info'>
                        <h1 className="hero-heading">Discover Your Next Adventure with Bookify</h1>
                        <p className="hero-para">
                            Explore a world of captivating stories. Find your favorite books and immerse yourself in the joy of reading. Bookify offers a vast collection of genres, from thrilling mysteries to heartwarming romances. Whether youre a seasoned reader or just starting your literary journey, there's something for everyone.
                        </p>
                        <div className='hero-search'>
                            <button className='start-reading'>start reading</button>
                            <button className='search-book'>search Book</button>
                        </div>
                    </div>
                    <div className="hero-illustration">
                        <img src={working} className='search-illustration' alt="book illustration" />
                    </div>

                </div>


            </div >
            <div className='books-section'>

                <h4 className='books-section-heading'>What are the books availible on Bookify</h4>
                <div className="grid-wrapper book-genre">
                    <div className='genre fiction'>
                        <img className='fiction-image' src={fiction} alt="Fiction" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos, reprehenderit obcaecati ullam, dolorem animi voluptates ratione, quas molestiae enim facere a architecto perferendis. Optio eius eaque quasi suscipit minima temporibus repudiandae modi incidunt? Omnis quibusdam perferendis ut ex praesentium enim debitis illo autem quaerat?
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={astronomer} alt="" />
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quod modi at optio iusto non recusandae soluta dolorem vitae asperiores labore ipsam unde repellat quidem natus, autem iure aut dolores laboriosam distinctio fugit in? Totam.
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={buisnessFiction} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore impedit amet deserunt culpa nobis ipsa quisquam obcaecati deleniti sit illum nemo tenetur, quidem optio, est, ullam dolores animi sequi ea error incidunt temporibus adipisci!
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={history} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore impedit amet deserunt culpa nobis ipsa quisquam obcaecati deleniti sit illum nemo tenetur, quidem optio, est, ullam dolores animi sequi ea error incidunt temporibus adipisci!
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={tech} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore impedit amet deserunt culpa nobis ipsa quisquam obcaecati deleniti sit illum nemo tenetur, quidem optio, est, ullam dolores animi sequi ea error incidunt temporibus adipisci!
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={books} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore impedit amet deserunt culpa nobis ipsa quisquam obcaecati deleniti sit illum nemo tenetur, quidem optio, est, ullam dolores animi sequi ea error incidunt temporibus adipisci!
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={khalidbinwalid} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore impedit amet deserunt culpa nobis ipsa quisquam obcaecati deleniti sit illum nemo tenetur, quidem optio, est, ullam dolores animi sequi ea error incidunt temporibus adipisci!
                        </p>
                    </div>
                    <div className='genre'>
                        <img src={programming} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore impedit amet deserunt culpa nobis ipsa quisquam obcaecati deleniti sit illum nemo tenetur, quidem optio, est, ullam dolores animi sequi ea error incidunt temporibus adipisci!
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}
