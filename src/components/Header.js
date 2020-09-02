import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Hamburger from "./Hamburger"

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: #111;
  cursor: pointer;
  z-index: 10;
`

const Headline = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  line-height: 3rem;
  margin-left: 3rem;
  color: white;
`

const Header = props => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Headline>PHOTOGRAPHY PORTFOLIO</Headline>
      </Link>
      <Hamburger onClick={props.onClick} />
    </HeaderWrapper>
  )
}

export default Header
