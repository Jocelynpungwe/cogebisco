import React from 'react'
import styled from 'styled-components'
import { links } from '../utils/constants'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <Container>
      <footer className="section-center">
        <div className="project-container">
          <section className="footer-section">
            {/* <div className="logo-footer-container"> */}
            <div className="link">
              <h4>Menu</h4>
              <ul className="nav-links footer-paragraph">
                <li>
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    qui sommes nous
                  </Link>
                </li>
                <li>
                  <Link
                    to="staff"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    personnel
                  </Link>
                </li>
              </ul>
              {/* </div> */}
            </div>
            <div className="address-div">
              <h4>Adresse</h4>
              <p className="footer-paragraph">Numéro 1638, 1ère Rue</p>
              <p className="footer-paragraph">Quartier Funa</p>
              <p className="footer-paragraph">Commune de Limete</p>
              <p className="footer-paragraph">Ville de Kinshasa</p>
            </div>
            <div>
              <h4>Heare D'Ouverture</h4>
              <p className="footer-paragraph">Lundi - Vendredi: 9h - 16h</p>
              <p className="footer-paragraph">Samedi - Dimanche: fermé</p>
            </div>
            <div>
              <h4>Téléphone</h4>
              <p className="footer-paragraph">+243 997 760 547</p>
            </div>
          </section>
          <div className="copyright-container">
            <p className="copyright">2023 Cogebisco. All Rights Reserved </p>
          </div>
        </div>
      </footer>
      {/* <h5>
        &copy; {new Date().getFullYear()}
        <span> JocesTech </span>
      </h5>
      <h5>All rights reserved</h5> */}
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-grey-2);
  text-align: center;
  color: white;
  flex-shrink: 0;
  padding: 3rem 0;

  .address-div {
    p {
      margin: 0.2rem 0;
    }
  }

  h4 {
    margin-top: 1.5rem;
    color: white;
  }

  p {
    color: white;
    margin: 0.2rem 0;
  }

  .footer-link {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: black;
  }

  li {
    margin: 0.2rem 0;
  }

  .footer-paragraph,
  .copyright {
    font-size: 15px;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  .footer-paragraph {
    font-weight: 500;
    max-width: 540px;
  }

  .copyright {
    font-size: 18px;
    padding: 2rem 0;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 30px;
    color: var(--cogebisco-one);
    border-top: 2px solid white;
  }

  .link {
    margin-top: 30px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    /* li {
      margin: 0 0.5rem;
    } */
    a {
      /* color: var(--clr-grey-3); */
      color: #fff;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      cursor: pointer;

      /* padding: 0.5rem; */
      &:hover {
        border-bottom: 2px solid var(--cogebisco-one);
      }
    }
  }

  @media (min-width: 550px) {
    .footer-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    align-items: start;
    /* text-align: left; */

    .link {
      margin-top: 0;
    }
  }

  /* @media (min-width: 1020px) {
    .logo-footer-container {
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      margin-top: 0;
    }
  } */
`

export default Footer
