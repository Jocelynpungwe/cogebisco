import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import gegobiscoLogo from '../assets/gegobisco/gogebsico-logo.png'

import { useProductsContext } from '../context/products_context'
import { Link } from 'react-scroll'

const Nav = () => {
  const { openSidebar } = useProductsContext()

  return (
    <header className="background-header">
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={gegobiscoLogo} alt="gegobisco logo" />
            </Link>
            <button type="button" className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
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
        </div>
      </NavContainer>
    </header>
  )
}

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(46, 45, 45);

  li {
    list-style-type: none;
  }

  img {
    width: 150px;
    height: 150px;
  }

  .nav-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    /* color: var(--clr-primary-5); */
    color: black;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 1020px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-column-gap: 100px;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        /* color: var(--clr-grey-3); */
        color: black;
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid var(--cogebisco-one);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
