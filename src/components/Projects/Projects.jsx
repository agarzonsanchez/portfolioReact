import React, { useState } from "react";
import { Github } from "react-bootstrap-icons";

const Projects = () => {
  const [image] = useState({
    image: "/images/paranoid.gif",
    imageO: "/images/pokemonApp.gif",
    imageT: "/images/colJuridicaApp.gif",
  });
  return (
    <>
      <div className="col p-5 d-flex justify-content-center align-items-center aboutDiv">
        <div className="col-8">
          <h2 className="titleVG">My Projects</h2>
          <p className="text-white">Take a look what I've worked before</p>

          <div className="d-flex flex-wrap">
            <div className="card m-2" style={{ width: "250px" }}>
              <img
                className="card-img-top"
                src={image.image}
                alt="Paranoid Bikes"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Paranoid Bikes</strong>
                </h5>
                <p className="card-text">
                  This project is an e-commerce website for bikes created with
                  React, Redux Tool Kit, Express, Bulma, and Mongo DB.
                </p>
                <div>
                  <a href="https://github.com/agarzonsanchez" target="_blank">
                    <div className="m-2">
                      <Github color="black" size={40} />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="card m-2" style={{ width: "250px" }}>
              <img
                className="card-img-top"
                src={image.imageT}
                alt="Paranoid Bikes"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Coljuridica</strong>
                </h5>
                <p className="card-text">
                  Lawyer company landing page to catch future customer
                  attention. Created with React, Bootstrap, and React Router
                  DOM.
                </p>
                <div>
                  <a href="https://github.com/agarzonsanchez" target="_blank">
                    <div className="m-2">
                      <Github color="black" size={40} />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="card m-2" style={{ width: "250px" }}>
              <img
                className="card-img-top"
                src={image.imageO}
                alt="Paranoid Bikes"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Pokedex</strong>
                </h5>
                <p className="card-text">
                  The pokedex webpage shows information about pokemons and their
                  principal features. It was created with React, Node, and
                  PostgreSQL.
                </p>
                <div>
                  <a href="https://github.com/agarzonsanchez" target="_blank">
                    <div className="m-2">
                      <Github color="black" size={40} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
