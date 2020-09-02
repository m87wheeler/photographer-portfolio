import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const PortholeContainer = styled.div`
  padding: 1rem 0;

  @media (max-width: 700px) {
    height: calc(100vh - 6rem);
  }
`

const PortholeWrapper = styled.div`
  position: relative;
  width: ${props => (props.size ? `${props.size}rem` : "20rem")};
  height: ${props => (props.size ? `${props.size}rem` : "20rem")};
  overflow: hidden;
  border-radius: 100%;
  border: ${props => (props.border ? "3px solid white" : "none")};

  img {
    position: absolute;
    filter: ${props => (props.grayscale ? "saturate(0)" : "saturate(1)")};
  }

  .landscape-image {
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  }

  .portrait-image {
    width: 100%;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
  }

  @media (max-width: 700px) {
    width: ${props => (props.size ? `${props.size}rem` : "16rem")};
    height: ${props => (props.size ? `${props.size}rem` : "16rem")};
  }
`

const ImageTitle = styled.h5`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  text-align: center;
  line-height: 1.5rem;
  padding: 1rem;
  color: white;
`

const ImageText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 1.5rem;
  padding: 1rem;
  color: white;
`

const ImagePorthole = props => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    const img = new Image()
    img.onload = function () {
      setDimensions({
        height: this.height,
        width: this.width,
      })
    }
    img.src = props.src
  }, [props.src])

  return (
    <PortholeContainer size={props.size}>
      <PortholeWrapper grayscale={props.grayscale} border={props.border}>
        <img
          src={props.src}
          alt={props.alt}
          className={
            dimensions.width > dimensions.height
              ? "landscape-image"
              : "portrait-image"
          }
        />
      </PortholeWrapper>
      <ImageTitle>{props.title}</ImageTitle>
      <ImageText>{props.text}</ImageText>
    </PortholeContainer>
  )
}

ImagePorthole.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default ImagePorthole
