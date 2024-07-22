import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/netflix-logo.png" alt="Netflix Logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/tv-shows" className="header__nav-link">TV Shows</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/movies" className="header__nav-link">Movies</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/my-list" className="header__nav-link">My List</Link>
          </li>
        </ul>
      </nav>
      <div className="header__user">
        <img src="/path/to/user-profile.png" alt="User Profile" />
        <span className="header__user-name">Star jack</span>
      </div>
    </header>
  );
}

export default Header;
