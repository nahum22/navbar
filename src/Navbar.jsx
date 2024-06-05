import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  
  const linkStyles = {
    opacity: showLinks? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header"></div>
        <img src={logo} className="logo" alt="logo" />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef} style={linkStyles}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
