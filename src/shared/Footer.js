import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-line"></div>
      <div className="footer-text-container">
        <p className="footer-email">
          <h4>✉︎</h4> <a className='email-link' href='mailto:info@three-headedlion.com'>info@three-headedlion.com</a> || ☎︎ <a className='email-link' href='tel:+13479743765'>347.974.3765</a>
        </p>
        <p className="copyright">
          Copyright <h4>©</h4> 2020 Three-Headed Lion Productions - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
