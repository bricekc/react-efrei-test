import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to={'/welcome'} className={`nav-link ${pathname === '/welcome' && 'active'}`} aria-current="page">welcome</Link>
            </li>
            <li className="nav-item">
                <Link to={'/counter'} className={`nav-link ${pathname === '/counter' && 'active'}`}>counter</Link>
            </li>
            <li className="nav-item">
                <Link to={'/listMultiple'} className={`nav-link ${pathname === '/listMultiple' && 'active'}`}>listMultiple</Link>
            </li>
            <li className="nav-item">
                <Link to={"/listBook"} className={`nav-link ${pathname === '/listBook' && 'active'}`}>LIstBook</Link>
            </li>
        </ul>
    );
}

export default Header;