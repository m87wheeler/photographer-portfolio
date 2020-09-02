import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background: white;

  &:hover {
    background: crimson;
  }
`

const ScrollToTop = props => {
  return <Wrapper onClick={props.onClick} />
}

export default ScrollToTop
