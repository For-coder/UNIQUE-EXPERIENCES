import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import style from "./styles/hero.css"

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinkWrapper>
          <FooterDesc>
            <h1>
              <span id="red" css={style}>
                UNIQUE
              </span>{" "}
              EXPERIENCES
            </h1>
            <p>We give the best experiences</p>
          </FooterDesc>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/page-2/">Contact</FooterLink>
            <FooterLink to="/page-2/">Experiences</FooterLink>
            <FooterLink to="/page-2/">Sponsorships</FooterLink>
            <FooterLink to="/page-2/">Support</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/page-2/">Videos</FooterLink>
            <FooterLink to="/page-2/">Submit Experiences</FooterLink>
            <FooterLink to="/page-2/">Agency</FooterLink>
            <FooterLink to="/page-2/">Influencers</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/page-2/">Instagram</FooterLink>
            <FooterLink to="/page-2/">Facebook</FooterLink>
            <FooterLink to="/page-2/">YouTube</FooterLink>
            <FooterLink to="/page-2/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterContainer>
      <Copy>
        Developed By
        <a
          class="footer__link twitter-link"
          target="_self"
          href="https://kennedybanda.com"
        >
          K.B.
        </a>
        | &copy; 2022 All rights reserved.
      </Copy>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: black;
  background: #ffd1dc;
`

const FooterDesc = styled.div`
padding 0 2rem;

h1{
    margin-bottom: 2rem;
    color: red;
}

@media screen and (max-width: 414px) {
  padding: 1rem;
  font-size: 14px;
}

@media screen and (max-width: 412px) {
  padding: 1rem;
  font-size: 14px;
}

@media screen and (max-width: 400px) {
    padding: 1rem;
    font-size: 14px;
  }

  @media screen and (max-width: 280px) {
    padding: 1rem;
    font-size: 9px;
  }
`

const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding 1rem 2rem;
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: black;

  &:hover {
    color: red;
    transitioln: 0.3s ease-out;
  }

  @media screen and (max-width: 360px) {
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 9px;
    color: black;

    &:hover {
      color: red;
      transitioln: 0.3s ease-out;
    }

    

    @media screen and (max-width: 280px) {
      text-decoration: none;
      margin-bottom: 0.5rem;
      font-size: 9px;
      color: black;
  
      &:hover {
        color: red;
        transitioln: 0.3s ease-out;
      }
  }
`
const Copy = styled.div`
  color: black;
  font-size: 14px;
  background: #ffd1dc;
  text-align: center;
  padding-bottom: 2rem;
`
