import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import styled from "styled-components"

import backIcon from "../assets/icons/undo.png"

const ButtonWrapper = styled.button`
  position: relative;
  display: ${props => (props.block ? "block" : "inline-block")};
  width: auto;
  height: 3rem;
  padding: 0 1rem;
  padding-left: ${props => (props.icon ? "2.5rem" : "1rem")};
  border: 3px solid white;
  background: transparent;
  font-size: 1rem;
  line-height: 2.5rem;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #333;
    background: white;

    .icon {
      filter: brightness(0.3);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-45%);
    width: 1.5rem;
    line-height: 2.5rem;
    transition: inherit;
  }
`

const Button = props => {
  if (props.to) {
    return (
      <Link to={props.to} className={props.className}>
        <ButtonWrapper primary={props.primary} icon={props.icon}>
          {props.icon === "back" ? (
            <img className="icon" src={backIcon} alt="icon" />
          ) : null}
          {props.children}
        </ButtonWrapper>
      </Link>
    )
  } else {
    return (
      <ButtonWrapper
        primary={props.primary}
        block={props.block}
        icon={props.icon}
        className={props.className}
      >
        {props.icon === "back" ? (
          <img className="icon" src={backIcon} alt="icon" />
        ) : null}
        {props.children}
      </ButtonWrapper>
    )
  }
}

Button.propTypes = {
  icon: PropTypes.oneOf(["back"]),
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
}

export default Button
