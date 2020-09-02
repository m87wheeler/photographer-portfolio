import React from "react"
import styled from "styled-components"

import StickyContainer from "../components/StickyContainer"
import LandingPhotograph from "../components/LandingPhotograph"
import ImagePorthole from "../components/ImagePorthole"
import Button from "../components/Button"

const PhotographyInfoGrid = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5rem;
  padding: 5vh 0 10vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  * {
    margin: 0 auto;
  }

  @media (max-width: 1360px) {
    display: flex;
    flex-flow: column nowrap;
  }
`

const ButtonContainer = styled.div`
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5vh;
`

const RisingText = styled.p`
  position: absolute;
  top: 50%;
  left: 20%;
  width: 60%;
  height: 50%;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  line-height: 6.5rem;
  color: white;
  z-index: 1;

  @media (max-width: 1360px) {
    left: 5rem;
    margin: 0;
    width: calc(100% - 10rem);
    font-size: 3rem;
    line-height: 4.5rem;
  }

  @media (max-width: 700px) {
    left: 2rem;
    margin: 0;
    width: calc(100% - 4rem);
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`

const Home = () => {
  return (
    <div>
      <StickyContainer height={3}>
        <LandingPhotograph
          src={
            "https://images.unsplash.com/photo-1528837516156-0a7225a43641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80"
          }
        />
        <RisingText>
          I am a photographer. Welcome to my portfolio! Take a look around...I'm
          sure you'll find something you like.
        </RisingText>
      </StickyContainer>
      <PhotographyInfoGrid>
        <ImagePorthole
          src={
            "https://images.unsplash.com/photo-1473806189829-9641421a59f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
          alt={"Milky Way over treetops"}
          size={20}
          title="Sky At Night Photography"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel."
        />
        <ImagePorthole
          src={
            "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          }
          alt={"Fender Telecaster"}
          size={20}
          title="Musician &amp; Gig Photography"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel."
        />
        <ImagePorthole
          src={
            "https://images.unsplash.com/photo-1583953623787-ada99d338235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          }
          alt={"Steak"}
          size={20}
          title="Food Photography"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel."
        />
        <ButtonContainer>
          <Button to="/gallery">View My Work</Button>
          <Button to="/contact">Get In Touch</Button>
        </ButtonContainer>
      </PhotographyInfoGrid>
    </div>
  )
}

export default Home
