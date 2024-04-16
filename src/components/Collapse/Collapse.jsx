import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './collapse.css';
import datasCollapse from '../Data/dataCollapse';

function Collapse() {
    const [toggle, setToggle] = useState(
        Array(datasCollapse.length).fill(false)
    );

    const handleClick = (index) => {
        const newToggle = [...toggle];
        newToggle[index] = !newToggle[index];
        setToggle(newToggle);
    };

    return (
        <div className="collapse--container">
            {datasCollapse.map((dataCollapse, index) => (
                <div key={dataCollapse.id}>
                    <form className="collapse--form">
                        <h3 className="collapse--title">
                            {dataCollapse.label}
                        </h3>
                        <FontAwesomeIcon
                            className={`collapse--icon ${
                                toggle[index] ? 'rotated' : 'not-rotated'
                            }`}
                            icon={faAngleUp}
                            onClick={() => handleClick(index)}
                        />
                    </form>
                    {toggle[index] && (
                        <div className="collapse--content">
                            <p className="collapse--text">
                                {dataCollapse.text}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Collapse;
