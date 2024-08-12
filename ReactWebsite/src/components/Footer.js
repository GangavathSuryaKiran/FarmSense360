import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          FarmSense<span>360</span>
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/soil">Soil</a>

          <a href="/about">About</a>

          <a href="/schemes">Schemes</a>

          <a href="/community">Community</a>
        </p>

        <p className="footer-company-name">FarmSense360 © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>NIT</span> Jalandhar, Punjab
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 9657XXXXXX</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:gangavath0@gmail.com">farmsense360@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the website</span>
          Complete Farming support for the backbone of out nation
        </p>

        <div className="footer-icons">
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
