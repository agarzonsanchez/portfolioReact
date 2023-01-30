import React from "react";
import "./Footer.css";
import { Linkedin, Github, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer class="page-footer font-small mdb-color lighten-3 pt-4 bgFooter">
      <div className="d-flex justify-content-center">
        <div>
          <div className="m-2">
            <Linkedin color="white" size={40} />
          </div>
        </div>

        <div>
          <div className="m-2">
            <Github color="white" size={40} />
          </div>
        </div>

        <div>
          <div className="m-2">
            <Twitter color="white" size={40} />
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3 textColor">
        © 2023 All Rights Reserved.
        <a className="ml-4" href="https://www.andresgarzoncodes.com">
          andresgarzoncodes.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
