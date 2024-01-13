import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Aadhyaaa Mashru
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aadhyaaa-mashru-88371a229/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/aadhyaaamashru">
          <FaGithub />
        </a>
        {/* <a href="https://www.youtube.com/@howtobecomeadeveloper">
          <BsYoutube />
        </a> */}
      </div>
      <div className="footer__copyright">
        <small>&copy; Aadhyaaa Mashru. All rights reserved</small>
      </div>
      <div className="footer__copyright">
      <small href="https://github.com/Ade-mir/react-portfolio-website/tree/master">Inspired by Ademir's 
      <a href="https://github.com/Ade-mir/react-portfolio-website/tree/master"> portfolio</a>
      </small>
      </div>
    </footer>
  );
};

export default Footer;
