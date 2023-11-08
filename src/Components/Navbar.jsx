import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function newCityButton() {
    navigate("/cities/new");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-4 px-3 ">
      <div className="container-fluid">
        <a className="navbar-brand fs-1 fw-bold" href="/">
          CITIES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav px-5">
            <a
              className="nav-link active px-5 fs-2"
              aria-current="page"
              href={"/"}
            >
              Home
            </a>
            <a
              className="nav-link active px-5 fs-2"
              aria-current="page"
              href={"/about"}
            >
              About
            </a>
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className="btn btn-secondary "
              onClick={newCityButton}
            >
              NEW CITY
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
