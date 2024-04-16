import bannerHome from '../../assets/bannerHome.png';
import './banner.css';

function Banner() {
    return (
        <div>
            <img className="banner" src={bannerHome} alt="Banner Home" />
            <p className="banner--text">Chez vous, partout et ailleurs</p>
        </div>
    );
}

export default Banner;
