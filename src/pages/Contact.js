import React from "react"
import styled from "styled-components"

import PageHeader from "../components/PageHeader"
import ContactForm from "../components/ContactForm"

const ContactWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Me"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
        elit ipsum, posuere aliquet est bibendum vel. Nunc ut lacus velit.
        Pellentesque purus metus, sollicitudin sit amet mi eu, placerat posuere
        ipsum. Sed sodales mi et elit mattis porta. Aliquam erat volutpat.
        Nullam quis massa sed velit pulvinar porta a ut est. In commodo eget
        lectus at mollis."
      />
      <ContactWrapper>
        <ContactForm />
      </ContactWrapper>
    </>
  )
}

export default Contact
