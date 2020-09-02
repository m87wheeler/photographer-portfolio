import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const Main = styled.main`
  position: absolute;
  top: 3rem;
  left: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
  background: #333;
  overflow-x: hidden;
  overflow-y: scroll;
`
const ScrollTrack = createGlobalStyle`
/* width */
::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #ddd; 
  border-radius: 10px;
  border: 3px solid #eee;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ccc; 
}
`

const BodyWIndow = props => {
  return (
    <>
      <ScrollTrack /> <Main>{props.children}</Main>
    </>
  )
}

export default BodyWIndow
