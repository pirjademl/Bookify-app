import '../Header.css'
import { Menu } from 'lucide-react';
export default function Header() {
    return (
        <header>
            <nav className='top-navbar'>
                <Menu className="toggle-menu" />
                <a className='brand-logo' href="">
                    <span>Bookify</span>
                </a>
                <ul className='menu-links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="#top-books">top Books</a></li>
                    <li><a href="#supportus">Support Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
