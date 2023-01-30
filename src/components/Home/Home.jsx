import React, { useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "My name is",
    titleThree: "Andres",
    image: "/images/profile1.jpg",
  });
  return (
    <div className="mw-100 d-flex justify-content-center align-items-center flex-shrink home">
      <div className="text">
        <div>
          <h1>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
          </h1>
        </div>

        <div>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a Full Stack Web Developer.",
                "I'm an engineer.",
                "I'm a Tech Enthusiast.",
              ],
            }}
          />
          <div>
            <Link to="/contact">
              <button className="button">Contact me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-image flex-shrink">
        <img className="spiderman-image" src={state.image} alt="image1" />
      </div>
    </div>
  );
};

export default Home;

/*
<div className="d-flex justify-content-center align-items-center home">
      <div className="homeCl d-flex">
        <div>
          <h2>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
          </h2>

          <div>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I'm a Full Stack Web Developer.",
                  "I'm an engineer.",
                  "I'm a Tech Enthusiast.",
                ],
              }}
            />
            <div>
              <button className="button">Contact me</button>
            </div>
          </div>
        </div>

        <div className="home-image">
          <img className="spiderman-image" src={state.image} alt="image1" />
        </div>
      </div>
    </div>
*/
