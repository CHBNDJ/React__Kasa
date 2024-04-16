import './slides.css';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import datasGallery from '../../components/Data/dataGallery';

function Slides() {
    const { id } = useParams();
    const [pictures, setPictures] = useState([]);

    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0); // Ajout du state pour l'index de la slide active

    useEffect(() => {
        const selectedData = datasGallery.find((data) => data.id === id);
        setPictures(selectedData ? selectedData.pictures : []);
    }, [id]);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handleAfterChange = (index) => {
        setActiveSlide(index);
    };

    const getCustomDotText = (index) => {
        const totalSlides = pictures.length;
        return `${index + 1}/${totalSlides}`;
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleAfterChange,
        customPaging: (i) => <li>{getCustomDotText(i)}</li>,
    };

    return (
        <div>
            <Slider {...settings} ref={sliderRef}>
                {pictures.map((image, index) => (
                    <div key={index}>
                        <div className="slider--container">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="slider--image"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
            <FontAwesomeIcon
                icon={faAngleLeft}
                onClick={handlePrev}
                className="slider--arrowleft"
            />

            <FontAwesomeIcon
                icon={faAngleRight}
                onClick={handleNext}
                className="slider--arrowright"
            />
            <p className="slider--numberslide">
                {getCustomDotText(activeSlide)}
            </p>
        </div>
    );
}

export default Slides;
