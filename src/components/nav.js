import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Image from "../components/image"


const NavWrapper = styled.nav`
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;
    padding: 2vh 6vw;
    background: transparent;
    display: flex;
    align-items: center;
`

const NavImage = styled.div`
    flex: 1 1 0;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: flex-end;
`

const NavLink = styled(Link)`
    margin: 0 20px;
    color: #000000;
    text-decoration: none;
    &:hover {
        color: #2e2f91;
    }
`

const Nav = () => (
    <NavWrapper>
        <NavImage><Link to="/"><Image/></Link></NavImage>
        <NavLinks>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
        </NavLinks>
    </NavWrapper>
)

export default Nav;