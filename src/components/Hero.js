import * as React from "react"

import index from "../pages/index"

import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/video3.mp4"
import style from "./styles/hero.css"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <MainContainer>
      <MainBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </MainBg>
      <MainContent>
        <MainItems>
          <MainH1>
            <span style={style}>UNIQUE</span> EXPERIENCES
          </MainH1>
          <MainP>One-of-a-Kind Getaways and Lasting Memories</MainP>
          <Button to="/page-2/" main="true" big="true" round="true">
            ESCAPE NOW!
          </Button>
        </MainItems>
      </MainContent>
    </MainContainer>
  )
}

export default Hero

const MainContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  }
`

const MainBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const MainContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-width: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`

const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: white;
  line-height: 1.1;
  font-weight: bold;
`

const MainH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 5rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const MainP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
