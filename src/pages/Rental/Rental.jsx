import { useState } from 'react';
import './rental.css';
import datasGallery from '../../components/Data/dataGallery';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import Slides from '../../components/SlideShow/Slides';

function Rental() {
    const { id } = useParams();

    const selectedData = datasGallery.find((data) => data.id === id);

    const [toggleDescription, setToggleDescription] = useState(false);
    const [toggleEquipments, setToggleEquipments] = useState(false);

    const handleDescriptionClick = () => {
        setToggleDescription(!toggleDescription);
    };

    const handleEquipmentsClick = () => {
        setToggleEquipments(!toggleEquipments);
    };

    const ratingScale = parseInt(selectedData.rating);

    const order = [1, 2, 3, 4, 5];

    return (
        <main className="main">
            <Slides />
            <div key={selectedData.id} className="rental--container">
                <div>
                    <div className="title--container">
                        <h2 className="title">{selectedData.title}</h2>
                        <p className="location">{selectedData.location}</p>
                    </div>
                    <div className="tags--container">
                        {selectedData.tags.map((tag, index) => (
                            <span className="tags" key={index}>
                                {tag}
                                {index !== selectedData.tags.length - 1 && ' '}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="host">
                        <img
                            src={selectedData.host.picture}
                            alt="Photo de profil"
                            className="picture"
                        />
                        <h4 className="name">{selectedData.host.name}</h4>
                    </div>
                    <div className="star--container">
                        {order.map((orderElem) =>
                            ratingScale >= orderElem ? (
                                <FontAwesomeIcon
                                    className="star--solid"
                                    key={orderElem}
                                    icon={solidStar}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className="star--regular"
                                    key={orderElem}
                                    icon={solidStar}
                                />
                            )
                        )}
                    </div>
                </div>

                <div className="rental--rental">
                    <div>
                        <form className="rental--form">
                            <h3 className="rental--title">Description</h3>
                            <FontAwesomeIcon
                                className={`rental--icon ${
                                    toggleDescription
                                        ? 'rotated'
                                        : 'not-rotated'
                                }`}
                                icon={faAngleUp}
                                onClick={handleDescriptionClick}
                            />
                        </form>
                        {toggleDescription && (
                            <div className="rental--content">
                                <p className="rental--text">
                                    {selectedData.description}
                                </p>
                            </div>
                        )}
                    </div>
                    <div>
                        <form className="rental--form">
                            <h3 className="rental--title">Equipements</h3>
                            <FontAwesomeIcon
                                className={`rental--icon ${
                                    toggleEquipments ? 'rotated' : 'not-rotated'
                                }`}
                                icon={faAngleUp}
                                onClick={handleEquipmentsClick}
                            />
                        </form>
                        {toggleEquipments && (
                            <div className="rental--content">
                                <dl className="rental--text">
                                    {selectedData.equipments.map(
                                        (equipment, index) => (
                                            <dd
                                                className="rental--list"
                                                key={index}
                                            >
                                                {equipment}
                                            </dd>
                                        )
                                    )}
                                </dl>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Rental;
