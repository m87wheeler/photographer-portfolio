import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./components/Header"
import Nav from "./components/Nav"
import BodyWindow from "./components/BodyWindow"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import GalleryIndex from "./pages/GalleryIndex"
import GalleryPage from "./pages/GalleryPage"
import Contact from "./pages/Contact"

const StyleReset = createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

const AppWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #111;
`

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const handleNav = () => {
    setNavIsOpen(!navIsOpen)
  }

  return (
    <>
      <Router>
        <StyleReset />
        <AppWrapper>
          <Header onClick={handleNav} />
          <Nav navIsOpen={navIsOpen} onClick={handleNav} />
          <BodyWindow>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/gallery">
                <GalleryIndex />
              </Route>
              <Route path="/gallerypage">
                <GalleryPage />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </BodyWindow>
          <Footer />
        </AppWrapper>
      </Router>
    </>
  )
}

export default App
