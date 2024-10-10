import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const { user } = useContext(UserContext);
  console.log('user', user);
  return (
    <ul className="nav nav-tabs">
      {user}
      <li className="nav-item">
        <Link to={'/welcome'} className={`nav-link ${pathname === '/welcome' && 'active'}`} aria-current="page">
          welcome
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/counter'} className={`nav-link ${pathname === '/counter' && 'active'}`}>
          counter
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/listMultiple'} className={`nav-link ${pathname === '/listMultiple' && 'active'}`}>
          listMultiple
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/listBook'} className={`nav-link ${pathname === '/listBook' && 'active'}`}>
          LIstBook
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/listUser'} className={`nav-link ${pathname === '/listUser' && 'active'}`}>
          LIstUser
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/register'} className={`nav-link ${pathname === '/register' && 'active'}`}>
          register
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/login'} className={`nav-link ${pathname === '/login' && 'active'}`}>
          login
        </Link>
      </li>
    </ul>
  );
}

export default Header;
