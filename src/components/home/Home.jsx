import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeadersSocials from "./HeadersSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Jaret HL</h1>
        <span className="home__education">
          Desarrollador Back-end y Front-end
        </span>
        <HeadersSocials />
        <a href="#contact" className="btn">
          Contáctame
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
