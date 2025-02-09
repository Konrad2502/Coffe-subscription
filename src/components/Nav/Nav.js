import React from "react";
import Icon from "../../assets/icon-coffee-bean.svg";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav__logo">
        <img className="nav__logo-img" src={Icon} alt="Logo icon" />
        <h3 className="nav__logo-title">cofferoaster</h3>
      </div>
      <div className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
      <ul className={`nav__list ${menuOpen ? "nav__list--open" : ""}`}>
        <Link
          to="/"
          className="nav__list-item"
          onClick={() => setMenuOpen(false)}
        >
          home
        </Link>
        <Link
          to="/about"
          className="nav__list-item"
          onClick={() => setMenuOpen(false)}
        >
          about us
        </Link>
        <Link
          to="/create"
          className="nav__list-item"
          onClick={() => setMenuOpen(false)}
        >
          create your plan
        </Link>
      </ul>
    </div>
  );
}
