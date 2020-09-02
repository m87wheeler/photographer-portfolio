// form taken from tutorial page - incomplete
// https://hackernoon.com/setting-up-a-serverless-contact-form-in-react-using-nodemailer-and-express-19df9fdb20ed

import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

import Button from "./Button"

const FormWrapper = styled.form`
  width: 60%;
  margin: 0 20%;
  padding: 2rem;
  background: #444;

  @media (max-width: 700px) {
    width: 90%;
    margin: 0 5%;
  }
`

const Input = styled.input`
  display: block;
  width: 60%;
  margin: 0.5rem auto 2rem;
  padding: 1rem 2rem;
  border: 3px solid white;
  background: transparent;

  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem;
  }
`

const TextArea = styled.textarea`
  display: block;
  width: 60%;
  height: 8rem;
  margin: 0.5rem auto 2rem;
  padding: 1rem 2rem;
  border: 3px solid white;
  background: transparent;

  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem;
  }
`

const Label = styled.label`
  display: block;
  width: 60%;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  color: white;
`

const SubmitButton = styled(Button)`
  margin: 2rem auto;
`

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  })

  const resetForm = () => {
    setFormState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    })
  }

  const formSubmit = e => {
    e.preventDefault()

    setFormState({
      buttonText: "...sending",
    })

    let data = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    }

    axios
      .post("API_URI", data)
      .then(res => {
        setFormState({ sent: true }, resetForm())
      })
      .catch(() => {
        console.log("Message not sent")
      })
  }

  return (
    <FormWrapper className="contact-form" onSubmit={e => formSubmit(e)}>
      <Label className="message-name" htmlFor="message-name">
        Your Name
      </Label>
      <Input
        onChange={e => setFormState({ name: e.target.value })}
        name="name"
        className="message-name"
        type="text"
        placeholder="Your Name"
        value={formState.name}
      />

      <Label className="message-email" htmlFor="message-email">
        Your Email
      </Label>
      <Input
        onChange={e => setFormState({ email: e.target.value })}
        name="email"
        className="message-email"
        type="email"
        placeholder="your@email.com"
        required
        value={formState.email}
      />
      <Label className="message" htmlFor="message-input">
        Your Message
      </Label>
      <TextArea
        onChange={e => setFormState({ message: e.target.value })}
        name="message"
        className="message-input"
        type="text"
        placeholder="Please write your message here"
        value={formState.message}
        required
      />
      <SubmitButton block type="submit">
        {formState.buttonText}
      </SubmitButton>
    </FormWrapper>
  )
}

export default ContactForm
