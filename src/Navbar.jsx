import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        {/* we want 1 row and 10 columns. There are by default 12 columns.  */}
        <div className="row">
          {/* we are using 10 columns out of 12 so that our website is centered */}
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Grow More
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* in bootstrap 5 "ml" has been replaced by "ms" and "mr" has been replaced by "me"  */}
                  {/* i.e. marginLeft by marginStart and marginRight by marginEnd  */}
                  {/* ms-auto so that all components shift to right side of navbar  */}
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink exact activeClassName= "menu_active" className="nav-link active"
                        aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName= "menu_active" className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName= "menu_active" className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName= "menu_active" className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
