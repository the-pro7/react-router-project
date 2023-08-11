import React from "react";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>VideoPanel</h1>
      <div className="nav__search">
        <input type="search" placeholder="Search a movie..." value={"hello"}/>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <ul className="nav__items">
        <li className="nav__items--item">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="nav__items--item">
          <Link to="/movies" className="link">
            Movies
          </Link>
        </li>
        <li className="nav__items--item">
          <Link to="/favourites" className="link">
            Your Favourites
          </Link>
        </li>
      </ul>
      {/* Hmaburger menu */}
      <div className="nav__hamburger">
        <span className="burger burger1"></span>
        <span className="burger burger2"></span>
        <span className="burger burger3"></span>
      </div>
    </nav>
  );
};

export default Navbar;
