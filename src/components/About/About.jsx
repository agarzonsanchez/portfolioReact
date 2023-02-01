import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="col p-6 d-flex justify-content-center align-items-center aboutDiv">
      <div className="col-8 textAbout">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["WHO I AM..."],
          }}
        />
        <p className="text-white ">
          Passionated web developer and network engineer.
        </p>
        <p className="text-white textAboutRes">
          I'm a front-end developer based in Toronto with a unique background in
          computer sciences and network engineering in Canada and Latin America.
          My experience is diverse with 4 years in IT and everything related to
          networking systems. Coding and networking have been my biggest goals
          and have become the perfect environment to grow my skills for my
          professional career. I enjoy creating codes that allowed me to keep
          refining my skills and show my creativity while providing good
          experiences for everyone. I will be thrilled to become part of a great
          team and work alongside other amazing programmers in order to learn
          and share my knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
