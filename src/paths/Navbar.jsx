import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faPlay,
  faSun,
  faMoon,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
To be used
<FontAwesomeIcon icon={faMoon} />
<FontAwesomeIcon icon={faSun} />
<FontAwesomeIcon icon={faDesktop} />
 */

const Navbar = ({
  moviePageShowing,
  setMovieShowing,
  searchQuery,
  setSearchQuery,
  getMovies,
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showThemeContextMenu, setShowThemeContextMenu] = useState(false);

  // Functions
  function handleBurgerEvent() {
    setShowMobileNav((prev) => !prev);
    console.log(showMobileNav);
  }

  function handleTheme() {
    setShowThemeContextMenu((prev) => !prev);
  }

  return (
    <nav className="nav">
      <h1 className="nav__logo">
        VideoPanel
        <FontAwesomeIcon icon={faPlay} className="play" />
      </h1>
      {moviePageShowing ? (
        <div className="nav__search">
          <input
            type="search"
            placeholder="Search a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon"
            onClick={() => getMovies(searchQuery)}
          />
        </div>
      ) : (
        ""
      )}
      <ul
        className="nav__items"
        style={{ transform: showMobileNav ? "translateX(0)" : null }}
      >
        <li className="nav__items--item">
          <Link to="/" className="link" onClick={() => setMovieShowing(false)}>
            Home
          </Link>
        </li>
        <li className="nav__items--item">
          <Link
            to="/movies"
            className="link"
            onClick={() => setMovieShowing(true)}
          >
            Movies
          </Link>
        </li>
        <li className="nav__items--item">
          <Link to="/favourites" className="link">
            Your Favourites
          </Link>
        </li>
        <li
          className={
            showThemeContextMenu ? "theme-selector show" : "theme-selector"
          }
          onClick={handleTheme}
        >
          Page Theme
          <div className="theme-selector__themes">
            <button>
              <FontAwesomeIcon icon={faSun} />
              Light
            </button>
            <button>
              <FontAwesomeIcon icon={faMoon} />
              Dark
            </button>
            <button>
              <FontAwesomeIcon icon={faDesktop} />
              System
            </button>
          </div>
        </li>
      </ul>
      {/* Hmaburger menu */}
      <div
        className={showMobileNav ? "nav__hamburger active" : "nav__hamburger"}
        onClick={handleBurgerEvent}
      >
        <span className="burger burger1"></span>
        <span className="burger burger2"></span>
        <span className="burger burger3"></span>
      </div>
    </nav>
  );
};

export default Navbar;
