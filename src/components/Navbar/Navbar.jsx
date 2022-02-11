import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  
                  <li className="nav-item">
                    <NavLink  className="nav-link" to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  className="nav-link" to="/contacts">Contacts</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                  </li>
                  
                </ul>
                
              </div>
            </nav> */}

      <nav className="d-flex justify-content-between p-3 align-items-center">
        <ul className="list-unstyled d-flex">
          <li className="px-2">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/tv">Tv</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
        <ul className="list-unstyled d-flex">
        <li className="px-2">
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </li>
        <li className="px-2">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
          </li>
        <li className="px-2">
            <a href="https://www.linkedIn.com/"><i className="fab fa-linkedin"></i></a>
          </li>
        <li className="px-2">
            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
          </li>

          <li className="px-2">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/logout">Logout</NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
}
