import React from 'react';
import Pokedex from '../Pokedex/Pokedex';

import './Layout.scss';

const Layout = () => {
  return (
    <div>
      <div className="hero is-danger is-fullheight">
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
