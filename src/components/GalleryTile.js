import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import placeholder from "../assets/images/jeremy-allouche-YStboKiFPVw-unsplash.jpg"

const TileThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 11.25rem;
  background: #999;
  transition: inherit;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(1);
    width: 100%;
    transition: inherit;
    transform-origin: center;
  }
`

const TileHeadline = styled.h3`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8.75rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  line-height: 1.5rem;
  padding: 0.5rem 2rem 0.5rem 1rem;
  color: white;
  transition: inherit;
`

const Tile = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  margin: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: rgba(17, 17, 17, 0.8);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    ${TileHeadline} {
      bottom: -3rem;
    }

    ${TileThumbnail} {
      height: 100%;

      img {
        transform: translateX(-50%) translateY(-50%) scale(3);
      }
    }
  }
`

const GalleryTile = () => {
  return (
    <Link to="/gallerypage">
      <Tile>
        <TileThumbnail>
          <img src={placeholder} alt="Tile Thumbnail" />
        </TileThumbnail>
        <TileHeadline>Guitar Photography</TileHeadline>
      </Tile>
    </Link>
  )
}

export default GalleryTile
