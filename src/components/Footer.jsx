import '../utils/footer.css';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-wrapper">
                        <div className='footer-links'>
                            <p>Navigation Links</p>
                            <ul>
                                <li>Home</li>
                                <li>Search Books</li>
                                <li>Login</li>
                                <li>Signup</li>
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
                                        <span>Instagram</span>

                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Github size={24} />
                                        <span>Instagram</span>

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            Lorem ipsum dolor sit amet consectetur
                            <ul>
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
