import './about.css';
import bannerAbout from '../../assets/bannerAbout.png';
import Collapse from '../../components/Collapse/Collapse';
function About() {
    return (
        <main className="main">
            <img
                src={bannerAbout}
                alt="About Picture"
                className="banner--about"
            />
            <Collapse />
        </main>
    );
}

export default About;
