import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

import { Link } from "gatsby"

const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, i) => {
      tripsArray.push(
        <TripsCard key={i}>
          <TripsImg
            src={item.node.img.childImageSharp.fluid.src}
            atl={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <TripsInfo>
            <TextWrap>
              <ImLocation />
              <TripsTitle>{item.node.name}</TripsTitle>
            </TextWrap>
            <Button
              to="/page-2"
              main="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </TripsInfo>
        </TripsCard>
      )
    })
    return tripsArray
  }
  return (
    <TripsContainer>
      <TripsHeading>{heading}</TripsHeading>

      <TripsWrapper>{getTrips(data)}</TripsWrapper>
    </TripsContainer>
  )
}

export default Trips

const TripsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: white;
  color: white;
`

const TripsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: red;
`

const TripsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const TripsCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  tranition: 0.2s ease;
`
const TripsImg = styled(Img)`
  height: 100%;
  max-widht: 100%;
  position: absolute;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 10px;

  &:hover {
    filter: brightness(70%);
  }
`

const TripsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const TripsTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
