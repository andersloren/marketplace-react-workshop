import React from "react";

const Header = () => {
  return (
    <div>
      <Nav />
      <header className="container-fluid bg-danger text-white pt-5 pb-5">
        <div className="container">
            <h2>Marketplace UI!</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;

export const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./logo-lexicon-small_2x.gif" width="110" height="38" alt="Lexicon Logo"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sing Up
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
