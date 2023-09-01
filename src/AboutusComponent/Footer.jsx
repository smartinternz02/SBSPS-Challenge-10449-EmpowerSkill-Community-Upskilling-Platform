// src/components/Footer.js
import React from 'react';
import './Footer.css';
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiFillTwitterSquare
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2023 Frameworkz.in</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Connect with us:</p>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fab fa-facebook"><AiFillFacebook/></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i><AiFillTwitterSquare/></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"><AiFillLinkedin/></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
