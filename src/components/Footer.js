import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: #111;
  cursor: pointer;
  z-index: 10;
`

const FooterText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 0.5rem;
  line-height: 3rem;
  text-align: center;
  margin-left: 3rem;
  color: white;

  @media (max-width: 700px) {
    font-size: 0.5rem;
    margin: 0 auto;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2020 Martin Wheeler Web</FooterText>
    </FooterWrapper>
  )
}

export default Footer
