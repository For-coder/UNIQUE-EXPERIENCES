import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const UsData = [
  {
    icon: <GiEarthAmerica />,
    title: "300+ Unique Destinations",
    desc: "",
  },
  {
    icon: <FaMoneyCheck />,
    title: "Best Deals",
    desc: "",
  },
  {
    icon: <MdAirplanemodeActive />,
    title: "2 Million+ Trips Made",
    desc: "",
  },
  {
    icon: <MdTimer />,
    title: "Best 24/7 Support Team",
    desc: "",
  },
]
const Us = () => {
  return (
    <UsContainer>
      <Heading>WHY US?</Heading>
      <Wrapper>
        {UsData.map((item, i) => {
          return (
            <UsBox key={i}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </UsBox>
          )
        })}
      </Wrapper>
    </UsContainer>
  )
}

export default Us

const UsContainer = styled.div`
  width: 100%;
  background: white;
  color: red;
  padding: 4rem calc((100vw - 1300px) / 2);
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h1`
  //   text-align: start;
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding: 0 2rem;
  margin-bottom: 3rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gad: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const UsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: red;
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const Description = styled.p``
