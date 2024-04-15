/* eslint-disable no-unused-vars */
import React from "react";

export function Header() {
  return (
    <header>
      {/* Navbar with Bootstrap classes */}
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        {/* Form for searching */}
        <form className="form-inline">
          {/* Search input field */}
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          {/* Search button */}
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
      <h1>Student Capstones</h1>
    </header>
  );
}
