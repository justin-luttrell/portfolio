import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import BlogPosts from "../components/blogPosts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <BlogPosts/>
  </Layout>
)

export default IndexPage
