import {socialLinks} from "./data";
import React from "react";

export function SocialLinks() {
  return <ul className="nav-icons">
    {socialLinks.map((link) => {
      const {id, href, icon} = link;
      return (
        <li key={id}>
          <a href={href} target="_blank" rel="noreferrer" className="nav-icon"
          ><i className={icon}></i
          ></a>
        </li>
      )
    })}
  </ul>
}

export function SocialLinkd() {
  return <ul className="footer-icons">
    {socialLinks.map((link) => {
      const {id, href, icon} = link;
      return (
        <li key={id}>
          <a href={href} target="_blank" rel='noreferrer' className="footer-icon"
          ><i className={icon}></i
          ></a>
        </li>
      )
    })}
  </ul>
}
