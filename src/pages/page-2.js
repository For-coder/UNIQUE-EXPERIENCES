// import * as React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const SecondPage = () => (
//   <Layout>
//     <Seo title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SecondPage

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
