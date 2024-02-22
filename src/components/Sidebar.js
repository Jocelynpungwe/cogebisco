import React from 'react'
import { Link } from 'react-scroll'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import gegobiscoLogo from '../assets/gegobisco/gogebsico-logo.png'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={gegobiscoLogo} alt="gegobisco logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeSidebar}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeSidebar}
            >
              Qui sommes nous
            </Link>
          </li>
          <li>
            <Link
              to="staff"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeSidebar}
            >
              Personnel
            </Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  background: var(--clr-grey-10);

  img {
    width: 100px;
    height: 100px;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: whitesmoke;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    background: var(--clr-grey-10);
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    color: black;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    cursor: pointer;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
    border-bottom: 2px solid var(--cogebisco-one);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 35%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
