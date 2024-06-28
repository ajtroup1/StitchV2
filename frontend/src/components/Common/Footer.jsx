import { useState } from "react";
import "../../css/App.css";

function Footer() {
  return (
    <div className="footer-main">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Stitch, Inc
          </span>
        </div>

        <img src="../../src\assets\stitch-icon.png" id="footer-logo" />
      </footer>
    </div>
  );
}

export default Footer;
