import React from "react"
import styled from "styled-components"

const StickyWrapper = styled.div`
  width: 100%;
  min-height: 91.5vh;
  height: ${props => `${props.height * 91.5}vh`};
  position: relative;
`

const StickyContainer = props => {
  return <StickyWrapper height={props.height}>{props.children}</StickyWrapper>
}

export default StickyContainer
