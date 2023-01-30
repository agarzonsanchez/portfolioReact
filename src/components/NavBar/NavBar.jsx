import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  House,
  Clipboard2Check,
  PersonVcard,
  CodeSlash,
  BookmarkHeart,
} from "react-bootstrap-icons";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row bgColor navBarH">
      <div className="my-auto p-0">
        <ul className="list-unstyled p-auto">
          <Link to="/" className="text-decoration-none">
            <li className="buttonB m-0">
              <House color="white" size={15} />
              <span className="text-white white m-2 d-none d-md-inline">
                Home
              </span>
            </li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="buttonB">
              <PersonVcard color="white" size={15} />
              <span className="text-white white m-2 d-none d-md-inline">
                Who I am
              </span>
            </li>
          </Link>
          <Link to="/skills" className="text-decoration-none">
            <li className="buttonB">
              <CodeSlash color="white" size={15} />
              <span className="text-white white m-2 d-none d-md-inline">
                Skills
              </span>
            </li>
          </Link>
          <Link to="/projects" className="text-decoration-none">
            <li className="buttonB">
              <Clipboard2Check color="white" size={15} />
              <span className="text-white m-2 d-none d-md-inline">
                Projects
              </span>
            </li>
          </Link>
          <Link to="/contact" className="text-decoration-none linkHover">
            <li className="buttonB">
              <BookmarkHeart color="white" size={15} />
              <span className="text-white m-2 d-none d-md-inline">Contact</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
