import React from 'react'
import logoImage from '../assets/gegobisco/cogebisco-logo-2.jpg'
import styled from 'styled-components'
function Logo() {
  return (
    <Wrapper className="section-center">
      <img src={logoImage} alt="logo image" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  img {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`

export default Logo
