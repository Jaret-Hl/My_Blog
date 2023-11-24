import React from "react";
import "./about.css";
import image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Acerca de mi</h2>
      <div className="about__container grid">
        <img src={image} alt="" className="about__img" />
        <div className="about__data grid">
          
          <div className="about__info">
            <p className="about__description">
              Soy Jaret HL desarrollador de software, mi enfoque principal es el
              diseño, desarrollo y mantenimiento de sistemas eficientes. Utilizo
              mi experiencia técnica para crear soluciones de software
              personalizadas que satisfacen las necesidades específicas de los
              clientes.
            </p>
            <a href="" className="btn">
              Descargar CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Desarrollador</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Fotografia</h3>
                <span className="skills__number ">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  );
};

export default About;
