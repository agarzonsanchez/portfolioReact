import React from "react";
import "./Footer.css";
import { Linkedin, Github, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer class="page-footer font-small mdb-color lighten-3 pt-4 bgFooter">
      <div className="d-flex justify-content-center">
        <div>
          <a href="https://www.linkedin.com/in/andresgarzons/" target="_blank">
            <div className="m-2 socialMedia">
              <Linkedin className="socialMedia" size={40} />
            </div>
          </a>
        </div>

        <div>
          <a href="https://github.com/agarzonsanchez" target="_blank">
            <div className="m-2">
              <Github className="socialMedia" size={40} />
            </div>
          </a>
        </div>

        <div>
          <a href="https://twitter.com/AndresGSan" target="_blank">
            <div className="m-2 socialMedia">
              <Twitter className="socialMedia" size={40} />
            </div>
          </a>
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
