import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const slowScaleGrow = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) scale(1);
  } to {
    transform: translateX(-50%) translateY(-50%) scale(1.1);
  }
`

const ImageWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 90.5vh;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    animation: ${slowScaleGrow} 20s forwards;
    z-index: 0;
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
`
const DarkFrameRight = styled(DarkFrame)`
  top: 7.5rem;
  right: 0;
  width: 7.5rem;
  height: calc(100% - 15rem);
`
const DarkFrameBottom = styled(DarkFrame)`
  bottom: 0;
  left: 0;
  height: 7.5rem;
  width: 100%;
`
const DarkFrameLeft = styled(DarkFrame)`
  top: 7.5rem;
  left: 0;
  width: 7.5rem;
  height: calc(100% - 15rem);
`

const LandingPhotograph = props => {
  return (
    <ImageWrapper>
      <DarkFrameTop />
      <DarkFrameRight />
      <DarkFrameBottom />
      <DarkFrameLeft />
      <img src={props.src} alt="landing" />
    </ImageWrapper>
  )
}

LandingPhotograph.propTypes = {
  src: PropTypes.string.isRequired,
}

export default LandingPhotograph
