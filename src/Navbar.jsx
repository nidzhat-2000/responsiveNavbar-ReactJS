import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleMenu}>
            {/* <button
            className="nav-toggle"
            onMouseEnter={toggleMenu}
            
          > */}
            <FaBars />
          </button>
        </div>

        {/* <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        > */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef} onMouseLeave={toggleMenu}>
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

        {/* {showLinks && (
          <div className="links-container show-container">
            <ul className="links">
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
        )} */}

        <ul className="social-icons">
          {social.map((socailMedia) => {
            const { id, url, icon } = socailMedia;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}

          {/* <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
