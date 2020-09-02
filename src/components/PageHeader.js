import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: relative;
`

const Title = styled.h1`
  width: auto;
  height: 7rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 4rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  line-height: 10rem;
  color: white;
`

const Introduction = styled.p`
  width: 40%;
  margin: 0 30% 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 1.5rem;
  color: white;
`

const PageHeader = props => {
  return (
    <HeaderWrapper>
      <Title>{props.title}</Title>
      {props.introduction ? (
        <Introduction>{props.introduction}</Introduction>
      ) : null}
      {props.children}
    </HeaderWrapper>
  )
}

export default PageHeader

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string,
}
