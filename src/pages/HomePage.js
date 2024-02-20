import React, { useEffect } from 'react'

import { Hero, Services, AboutUs, Logo } from '../components'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <AboutUs id="#about" />
      <Services />
      <Logo />
    </main>
  )
}

export default HomePage
