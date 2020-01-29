import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav.js'
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const HeaderWrapper = styled.header`
  background: rgba(13,13,13,.15);
  margin-bottom: 1.45rem;
  min-height: 85vh;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav/>
  </HeaderWrapper>
)

export default Header
