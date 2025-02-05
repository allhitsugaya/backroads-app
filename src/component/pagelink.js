import {pageLinks} from "./data";
import React from "react";

export function PageLinks() {
  return <ul className="footer-links">
    {pageLinks.map((link) => {
        const {id, href, text} = link;
        return (
          <li key={id}>
            <a href={href} className="footer-link">{text}</a>
          </li>
        )
      }
    )}
  </ul>
}
