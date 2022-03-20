import React from 'react';
import Pokedex from '../Pokedex/Pokedex';

import './Layout.scss';

const Layout = () => {
  return (
    <div>
      <div className="hero is-success is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-success is-inverted">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div id="main-content" className="hero-body">
          <div className="container has-text-centered">
            <Pokedex />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
