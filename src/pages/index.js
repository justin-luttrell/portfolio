import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <Header/>
    {/* <h1>Justin Luttrell</h1> */}
    {/* <p>Software Engineer | Lexington, Ky</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/contact/">Contact</Link> */}
  </Layout>
)

export default IndexPage
