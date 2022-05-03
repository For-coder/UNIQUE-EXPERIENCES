import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const People = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["people1", "people2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <PeopleContainer>
      <TopLine>REVIEWS</TopLine>
      <Description>Experience Rating</Description>
      <ContentWrapper>
        <ColumnOne>
          <Review>
            <h3>
              Kirstin of Lovettsville, VA{" "}
              <IoMdCheckmarkCircleOutline
                css={`
                  color: green;
                `}
              />
            </h3>
            <p>
              I am very pleased with the customer service!! The booking for the
              flight was very successful and I did call the next day for some
              information and the lady was very helpful and respectful! Thanks
              again and for sure I would refer friends and family to your
              business.
            </p>
          </Review>
          <Review>
            <h3>
              Nancy of South Park, PA{" "}
              <IoMdCheckmarkCircleOutline
                css={`
                  color: green;
                `}
              />
            </h3>

            <p>
              My experience with UNIQUE EXPERIENCES has been amazing. I had to
              cancel my trip, and I had an unrefundable car rental. The agent
              heard my reasons and found them genuine to give me a full refund.
              This is customer service, loved it and I would recommend to book
              with Priceline for peace of mind in these very unusual and
              uncertain times.
            </p>
          </Review>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </PeopleContainer>
  )
}

export default People

const PeopleContainer = styled.div`
  width: 100%;
  // background: #ffffe0;
  background: #ffd1dc;
  color: black;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: white;
  text-align: center;
  font-size: clamp(1.2rem, 5vw, 3rem);
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  text-align: center;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  color: red;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Review = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
