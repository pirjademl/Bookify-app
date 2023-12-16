import '../utils/footer.css';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-wrapper">
                        <div className='footer-links'>
                            <p>Navigation Links</p>
                            <ul className='footer-navigation-links'>
                                <Link className='nav-link' to='/'>Home</Link>
                                <Link className='nav-link' to='/search'>Search Book</Link>
                                <Link className='nav-link' to='/top-books'>Top Books</Link>
                                <Link className='nav-link' to='/login'>Login</Link>


                            </ul>
                        </div>
                        <div className='footer-links'>
                            Social Links
                            <ul>
                                <li>
                                    <a href="">
                                        <Instagram size={24} />
                                        <span>Instagram</span>

                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Linkedin size={24} />
                                        <span>LinkedIn</span>

                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Twitter size={24} />
                                        <span>Twittter</span>

                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Github size={24} />
                                        <span>Github</span>

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            Contact Details
                            <ul className='details'>
                                <li>
                                    <a href="https://magdum.me">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#">pirjademl7@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://magdum.me">Portfolio</a>
                                </li>
                                <li>
                                    <a href="https://magdum.me">Portfolio</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
