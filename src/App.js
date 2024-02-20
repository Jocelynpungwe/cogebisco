import '@stripe/stripe-js'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Hero,
  Services,
  AboutUs,
  Logo,
  Navbar,
  Sidebar,
  Footer,
} from './components'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import Nav from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Hero />
        <AboutUs />
        <Services />
        <Logo />
        <Footer />
        <Routes></Routes>
      </Router>
      {/* Add other sections */}
    </div>
  )

  // return (
  //   <Router>
  //     <Navbar />
  //     <Sidebar />
  //     <Routes>
  //       <Route path="/" exact element={<HomePage />} />
  //       <Route path="*" element={<ErrorPage />} />
  //     </Routes>
  //     <Footer />
  //   </Router>
  // )
}

export default App
