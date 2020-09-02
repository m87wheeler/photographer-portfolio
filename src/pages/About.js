import React from "react"
import styled from "styled-components"

import PageHeader from "../components/PageHeader"

const PortfolioImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 65%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1531865272530-d60338729e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-position: center;
    background-size: cover;
  }
`

const AboutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`

const About = () => {
  return (
    <>
      <PortfolioImageWrapper />
      <PageHeader
        title="About Me"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel. Nunc ut lacus velit.
        Pellentesque purus metus, sollicitudin sit amet mi eu, placerat posuere
        ipsum. Sed sodales mi et elit mattis porta. Aliquam erat volutpat.
        Nullam quis massa sed velit pulvinar porta a ut est. In commodo eget
        lectus at mollis."
      />
      <AboutWrapper></AboutWrapper>
    </>
  )
}

export default About
