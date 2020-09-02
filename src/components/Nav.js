import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavWrapper = styled.nav`
  position: fixed;
  top: 3rem;
  left: 3rem;
  width: calc(100% - 6rem);
  height: ${props => (props.isOpen ? "calc(100% - 6rem)" : "0")};
  background: #222;
  transition: height 0.3s ease-in-out;
  z-index: 9;
  overflow: hidden;
`

const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 6rem 0;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`

const NavLink = styled.li`
  position: relative;
  width: 100%;
  height: 6rem;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  color: white;
  letter-spacing: 0.5rem;
  line-height: 6rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #333;
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    letter-spacing: 1rem;

    &::after {
      width: 100%;
    }
  }
`

const Nav = props => {
  return (
    <NavWrapper isOpen={props.navIsOpen}>
      <UnorderedList>
        <Link to="/">
          <NavLink onClick={props.onClick}>HOME</NavLink>
        </Link>
        <Link to="/about">
          <NavLink onClick={props.onClick}>ABOUT</NavLink>
        </Link>
        <Link to="/gallery">
          <NavLink onClick={props.onClick}>GALLERY</NavLink>
        </Link>
        <Link to="/contact">
          <NavLink onClick={props.onClick}>CONTACT</NavLink>
        </Link>
      </UnorderedList>
    </NavWrapper>
  )
}

export default Nav
