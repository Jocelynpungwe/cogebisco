import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id="hero" className="opacity-div">
      <section className="background-hero">
        <Wrapper className="section-center">
          <article className="content">
            <div className="container">
              <h1 style={{ color: '#9a261e' }}>COGEBISCO</h1>
              <p className="hero-description">
                COMMISSION DE GESTION DES{' '}
                <span className="slogen">BIENS SAISIS ET CONFISQUES</span>
              </p>
              {/* <img src={GegoImage} alt="gogebisco logo" /> */}
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn primary-btn"
              >
                qui sommes nous
              </Link>
            </div>
          </article>
        </Wrapper>
      </section>
    </div>
  )
}

const Wrapper = styled.section`
  height: calc(100vh - 15rem);
  display: grid;
  place-items: center;
  img {
    width: 100px;
    height: 100px;
  }

  .slogen {
    display: block;
    border-bottom: 4px solid var(--cogebisco-one);
  }

  .img-container {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
  }

  h1 {
    color: #fff;
    text-align: center;
    /* font-family: Manrope; */
    /* font-size: 45px; */
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px; /* 103.571% */
    letter-spacing: 10px;
    text-shadow: 3px 3px 3px black;
    text-transform: uppercase;
  }

  .hero-product {
    color: #fff;
    text-align: center;
    /* font-family: Manrope; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: 0.4964;
  }

  .hero-description {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.75;
    width: 328px;
    text-shadow: 4px 4px 4px black;
  }

  @media (min-width: 768px) {
    /* h1 {
      font-size: 56px;
      line-height: 58px;
      width: 490px;
    } */
    .hero-description {
      width: 349px;
    }
  }
`

export default Hero
