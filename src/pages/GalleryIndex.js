import React from "react"
import styled from "styled-components"

import PageHeader from "../components/PageHeader"
import GalleryTile from "../components/GalleryTile"

const GalleryIndexWrapper = styled.main`
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`

const GalleryIndex = () => {
  return (
    <>
      <PageHeader
        title="My Gallery"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel. Nunc ut lacus velit.
        Pellentesque purus metus, sollicitudin sit amet mi eu, placerat posuere
        ipsum. Sed sodales mi et elit mattis porta. Aliquam erat volutpat.
        Nullam quis massa sed velit pulvinar porta a ut est. In commodo eget
        lectus at mollis."
      />
      <GalleryIndexWrapper>
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
      </GalleryIndexWrapper>
    </>
  )
}

export default GalleryIndex
