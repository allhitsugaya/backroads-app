import React from 'react';
import logo from '../images/logo.svg';
import {PageLink} from './pageLinks';
import {SocialLinks} from "./socialLinks";

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads"/>
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLink/>
          <SocialLinks/>
        </div>
      </nav>
  );
};

export default Navbar;
