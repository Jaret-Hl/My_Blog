import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
                <div>
                  <h3 className="about__title">6</h3>
                  <span className="about__subtitle">Proyectos completados</span>
                </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
                <div>
                  <h3 className="about__title">27</h3>
                  <span className="about__subtitle">Cup Of coffee</span>
                </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>
                <div>
                  <h3 className="about__title">6</h3>
                  <span className="about__subtitle">Clientes Satisfechos</span>
                </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-badge"></i>
                <div>
                  <h3 className="about__title">7</h3>
                  <span className="about__subtitle">Nominees Winner</span>
                </div>
        </div>
    </div>
  )
}

export default AboutBox