import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../utils/Header.css';
import { Menu } from 'lucide-react';
import Login from './Login';

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    }

    const handleNavigation = (path) => {
        setShowLogin(false); // Close login if open
        navigate(path);
    }

    return (
        <header>
            <nav className='top-navbar'>
                <Menu className="toggle-menu" />
                <Link to="/" className='brand-logo'>
                    <span>Bookify</span>
                </Link>
                <ul className='menu-links'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/search">Search Book</Link></li>
                    <li><Link to="/top-books">Top Books</Link></li>
                    <li><a href="#supportus" onClick={handleClick}>Login</a></li>
                </ul>
            </nav>
            {showLogin && <Login />}
        </header>
    )
}
