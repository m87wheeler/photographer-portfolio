import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Hamburger from "./Hamburger"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: #111;
  z-index: 10;
`

const Headline = styled.h1`
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  line-height: 3rem;
  margin-left: 3rem;
  color: white;

  @media (max-width: 700px) {
    display: none;
  }
`

const Icon = styled.h1`
  display: none;

  @media (max-width: 700px) {
    display: block;
    margin-left: 2rem;
    line-height: 3rem;
    color: white;
  }
`

const Header = props => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Headline>PHOTOGRAPHY PORTFOLIO</Headline>
        <Icon>
          <span style={{ color: "#999" }}>P</span>Portfolio...
        </Icon>
      </Link>
      <Hamburger onClick={props.onClick} />
    </HeaderWrapper>
  )
}

export default Header
