import React, { useState } from "react";

const Projects = () => {
  const [image] = useState({
    image: "/images/paranoid.jpg",
    imageO: "/images/pokemonApp.jpg",
    imageT: "/images/dogApp.jpg",
  });
  return (
    <>
      <div className="col p-5 d-flex justify-content-center align-items-center aboutDiv">
        <div className="col-8">
          <h2 className="titleVG">My Projects</h2>
          <p className="text-white">Take a look what I've worked before</p>

          <img
            className="spiderman-image"
            src={image.image}
            alt="ParanoidBikesWebSite"
          />

          <img
            className="spiderman-image"
            src={image.imageT}
            alt="ParanoidBikesWebSite"
          />

          <img
            className="spiderman-image"
            src={image.imageO}
            alt="ParanoidBikesWebSite"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
