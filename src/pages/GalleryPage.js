import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useWindowSize } from "../hooks/useWindowResize"
import { sortEveryNth } from "../logic/sortEveryNth"

import PageHeader from "../components/PageHeader"
import GalleryThumbnail from "../components/GalleryThumbnail"
import Button from "../components/Button"

const BackButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 1rem;
`

const GalleryWrapper = styled.main`
  width: 100%;
  min-height: 100%;
  height: auto;
  padding: 1rem;
  column-count: 4;
  column-gap: 1em;

  @media (max-width: 1365px) {
    column-count: 3;
  }
  @media (max-width: 1023px) {
    column-count: 2;
  }
  @media (max-width: 799px) {
    column-count: 1;
  }
`

const GalleryImage = styled(GalleryThumbnail)`
  width: 100%;
  height: auto;
  overflow: hidden;
`

const GalleryPage = () => {
  // ***** state *****
  const [width] = useWindowSize()
  const [isLoading, setIsLoading] = useState(true)
  const [imageData, setImageData] = useState([])
  const [sortedImageData, setSortedImageData] = useState([])

  // ***** fetch data *****
  const fetchData = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data.media)
      setImageData(imageData => [...imageData, ...data.media])
    } catch (err) {
      console.log("Error:", err)
    }
  }

  useEffect(() => {
    fetchData(
      "https://api.cosmicjs.com/v1/photo-gallery-portfolio/media?pretty=true&read_key=vg20NtnAMar1aT8sxgTo5cT8nXv0A3kRtKwtELbq8RYPgocNUv&limit=20&props=imgix_url,name,"
    )
  }, [])

  // ***** sort array of data based on viewport width *****
  // ***** not 100% sure this is sorting perfectly *****
  useEffect(() => {
    if (width > 1366) {
      setSortedImageData(sortEveryNth(imageData, 4))
    } else if (width > 1024 && width <= 1366) {
      setSortedImageData(sortEveryNth(imageData, 3))
    } else if (width > 800 && width <= 1024) {
      setSortedImageData(sortEveryNth(imageData, 2))
    } else {
      setSortedImageData(imageData)
    }
    setIsLoading(false)
  }, [width, imageData])

  return (
    <>
      <PageHeader
        title="Guitar Photography"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel. Nunc ut lacus velit.
        Pellentesque purus metus, sollicitudin sit amet mi eu, placerat posuere
        ipsum. Sed sodales mi et elit mattis porta. Aliquam erat volutpat.
        Nullam quis massa sed velit pulvinar porta a ut est. In commodo eget
        lectus at mollis."
      >
        <BackButton to="/gallery" icon={"back"}>
          Go Back
        </BackButton>
      </PageHeader>
      <GalleryWrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          sortedImageData.map((img, index) => (
            <GalleryImage
              key={img.name}
              src={`${img.imgix_url}?auto=format,compress&w=1000&q=75`}
              index={index.toString()}
            />
          ))
        )}
      </GalleryWrapper>
    </>
  )
}

export default GalleryPage
