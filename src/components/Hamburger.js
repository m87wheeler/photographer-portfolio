import React from "react"
import styled from "styled-components"

const HamburgerWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 2.75rem;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2rem;
  padding: 0.25rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  transition: width 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 2.75rem;

    span:nth-of-type(2) {
      margin-left: 0.5rem;
    }
  }
`

const Bar = styled.span`
  width: 2rem;
  height: 2px;
  background: white;
  transition: all 0.3s ease-in-out;
`

const Hamburger = props => {
  return (
    <HamburgerWrapper onClick={props.onClick}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </HamburgerWrapper>
  )
}

export default Hamburger
