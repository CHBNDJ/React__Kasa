import './gallery.css';
import datasGallery from '../Data/dataGallery';
import { Link } from 'react-router-dom';

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery--card">
                {datasGallery.map((dataGallery) => (
                    <Link
                        to={`/Rental/${dataGallery.id}`}
                        className="card"
                        key={dataGallery.id}
                    >
                        <img
                            src={dataGallery.cover}
                            alt="Housing Picture"
                            className="card--img"
                        />
                        <h2 className="card--title">{dataGallery.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
