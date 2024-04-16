/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={scrollToTop}>
            <img src="/actualize-logo.png" alt="" style={{ maxWidth: "100px", maxHeight: "50px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" onClick={scrollToTop}>
                  All Capstones
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="https://www.linkedin.com/in/andrew-dietz/"
                  className="nav-link active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
