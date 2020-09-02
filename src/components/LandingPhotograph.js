import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const slowScaleGrow = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(1.1);
  }
`

const ImageWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 90.5vh;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    animation: ${slowScaleGrow} 20s forwards;
  }
`

const DarkFrame = styled.div`
  position: absolute;
  background: #111;
  opacity: 0.9;
  z-index: 2;
`

const DarkFrameTop = styled(DarkFrame)`
  top: 0;
  left: 0;
  height: 7.5rem;
  width: 100%;

  @media (max-width: 1360px) {
    height: 5rem;
  }

  @media (max-width: 700px) {
    height: 2rem;
  }
`
const DarkFrameRight = styled(DarkFrame)`
  top: 7.5rem;
  right: 0;
  width: 7.5rem;
  height: calc(100% - 15rem);

  @media (max-width: 1360px) {
    top: 5rem;
    width: 5rem;
    height: calc(100% - 10rem);
  }

  @media (max-width: 700px) {
    top: 2rem;
    width: 2rem;
    height: calc(100% - 4rem);
  }
`
const DarkFrameBottom = styled(DarkFrame)`
  bottom: 0;
  left: 0;
  height: 7.5rem;
  width: 100%;

  @media (max-width: 1360px) {
    height: 5rem;
  }

  @media (max-width: 1360px) {
    height: 2rem;
  }
`
const DarkFrameLeft = styled(DarkFrame)`
  top: 7.5rem;
  left: 0;
  width: 7.5rem;
  height: calc(100% - 15rem);

  @media (max-width: 1360px) {
    top: 5rem;
    width: 5rem;
    height: calc(100% - 10rem);
  }

  @media (max-width: 1360px) {
    top: 2rem;
    width: 2rem;
    height: calc(100% - 4rem);
  }
`

const LandingPhotograph = props => {
  return (
    <ImageWrapper src={props.src}>
      <DarkFrameTop />
      <DarkFrameRight />
      <DarkFrameBottom />
      <DarkFrameLeft />
    </ImageWrapper>
  )
}

LandingPhotograph.propTypes = {
  src: PropTypes.string.isRequired,
}

export default LandingPhotograph
