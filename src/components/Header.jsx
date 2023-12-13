import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../utils/Header.css';
import { Menu, X } from 'lucide-react';
import Login from './Login';

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    }

    const toggleSidebar = (event) => {
        event.preventDefault();
        setShowSidebar(!showSidebar);
    }

    return (
        <header>
            <nav className='top-navbar'>
                <Menu onClick={toggleSidebar} className="toggle-menu" />
                <Link to="/" className='brand-logo'>
                    <span>Bookify</span>
                </Link>
                <div className={`menu-links-wrapper ${showSidebar ? 'open' : ''}`}>
                    <ul className='menu-links'>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/search">Search Book</Link></li>
                        <li><Link to="/top-books">Top Books</Link></li>
                        <li><a href="#supportus" onClick={handleClick}>Login</a></li>

                        <a href="close-menu" onClick={toggleSidebar}>
                            <X color='white' className='close-btn' />
                        </a>
                    </ul>
                </div>
            </nav>
            {showLogin && <Login />}
        </header>
    )
}
