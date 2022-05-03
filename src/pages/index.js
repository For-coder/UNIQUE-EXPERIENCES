import * as React from "react"
import Layout from "../components/layout"
import Email from "../components/Email"
import Hero from "../components/Hero"
import People from "../components/People"
import Seo from "../components/seo"
import Trips from "../components/Trips"
import Us from "../components/Us"

const IndexPage = () => (
  <Layout>
    <Seo title="UNIQUE EXPERIENCES" />
    <Hero />
    <Trips heading="UNIQUE DESTINATIONS" />
    <People />
    <Us />
    <Email />
  </Layout>
)

export default IndexPage
