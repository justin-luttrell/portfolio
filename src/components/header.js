// import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
// import { css } from "@emotion/core"

const HeaderWrapper = styled.header`
  background: #1392d11c;;
  margin-bottom: 1.45rem;
  min-height: 30vh;
  padding: 1.45rem 1.0875rem 1.45rem;
`

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <HeaderWrapper>
      <h1>Hello World</h1>
      <p>{data.site.siteMetadata.title}</p>
    </HeaderWrapper>
  )
}

export default Header
