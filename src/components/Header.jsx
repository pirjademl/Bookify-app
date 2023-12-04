import '../Header.css'
export default function Header() {
    return (
        <header>
            <nav className='top-navbar'>
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
