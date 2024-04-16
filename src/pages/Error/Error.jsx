/* eslint-disable react/no-unescaped-entities */
import './error.css';
import { Link } from 'react-router-dom';
function Error() {
    return (
        <main className="error--body">
            <p className="error--number">404</p>
            <p className="error--text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="error--">
                <p className="error--link">Retourner sur la page d'accueil</p>
            </Link>
        </main>
    );
}

export default Error;
