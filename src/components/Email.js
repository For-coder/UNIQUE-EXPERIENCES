import React from "react"
import styled from "styled-components"
import Pic from "../assets/images/email1.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Special Offers</h1>
        <p
          css={`
            font-weight: bold;
          `}
        >
          Sign up today and get $500 off your first unique experience!
        </p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              main="true"
              round="true"
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  mix-width: 350px;
                }

                @media screen and (max-width: 400px) {
                  width: 100%;
                  mix-width: 250px;
                }
              `}
            >
              Sign up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${Pic}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    color: red;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
    text-align: center;
  }
`

const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }

  input {
    background: yellow;
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 0;
  }
`
