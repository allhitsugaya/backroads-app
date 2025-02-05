import React from 'react';
import {PageLinks} from "./pagelink";
import {SocialLinkd} from "./socialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks/>
      <SocialLinkd/>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
)
  ;
};

export default Footer;
