import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/gegobisco/3.png'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="about">
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="cogebisco" />
        <article>
          <div className="title">
            <h2>About Cogebisco</h2>
            <div className="underline"></div>
          </div>
          <p>COMMING SOON</p>
          <h4>Our Purpose</h4>
          <p>COMMING SOON</p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
