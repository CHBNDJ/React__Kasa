import './footer.css';
import logoFooter from '../../assets/logoFooter.png';
function Footer() {
    return (
        <div className="footer">
            <img src={logoFooter} alt="Footer Logo" className="footer--img" />
            <p className="footer--text"> © 2020 Kasa.All rights reserved</p>
        </div>
    );
}

export default Footer;
