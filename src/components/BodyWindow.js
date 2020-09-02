import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

const Main = styled.main`
  position: relative;
  top: 3rem;
  left: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
  background: #333;
  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: 700px) {
    left: 0;
    width: 100%;
  }
`
const ScrollTrack = createGlobalStyle`
/* width */
::-webkit-scrollbar {
  width: 13px;

  @media (max-width: 700px) {
  display: none;
}
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

const BodyWindow = props => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.querySelector("#main").scrollTo(0, 0)
  }, [pathname])
  /* this is definitely not a safe way to do this */

  return (
    <>
      <ScrollTrack />
      <Main id="main">{props.children}</Main>
    </>
  )
}

export default BodyWindow
