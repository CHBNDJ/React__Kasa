import Logo from '../../assets/logoHeader.png';
import { Link } from 'react-router-dom';
import './header.css';
function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Logo title" className="logo" />
            <Link to="/" className="header--link">
                Accueil
            </Link>
            <Link to="/About" className="header--about">
                A propos
            </Link>
        </header>
    );
}

export default Header;
