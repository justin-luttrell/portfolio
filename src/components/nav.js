import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Image from "../components/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {navExpanded: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({navExpanded: !this.state.navExpanded});
    }
    
    render() {
        return (
            <NavWrapper>
                <NavTop>
                    <NavImage><Link to="/"><Image/></Link></NavImage>
                    <Bars icon={faBars} onClick={this.handleClick}></Bars>
                </NavTop>
                <NavLinks navExpanded={this.state.navExpanded}>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </NavLinks>
            </NavWrapper>
        );
    }
}

export default Nav;

const NavWrapper = styled.nav`
    // position: absolute;
    // top: 0;
    z-index: 1000;
    width: 100%;
    padding: 1vh 2vw;
    background: white;
    box-shadow: 0px 2px 6px hsla(0,0%, 0%, 0.2);
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: baseline;
    }
`

const NavTop = styled.div`
    display: flex;
    width: 100%;
`

const NavImage = styled.div`
flex: 1 1 0;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin-top: 12px;
        width: 100%;

        display: ${props => props.navExpanded ? 'flex' : 'none' }
    }

`

const NavLink = styled(Link)`
    margin: 0 20px;
    color: #000000;
    text-decoration: none;
    padding: 4px;

    &:hover {
        color: #2e2f91;
    }

    @media screen and (max-width: 600px) {
        margin: initial;
        line-height: 27px;
        width: 100%;

        &:hover {
            background-color: #f0f0f0;
            border-radius: 6px;
        }
    }
`

const Bars = styled(FontAwesomeIcon)`
    align-self: center;
    font-size: 25px;
    display: none;
    &:hover{
        color:  #2e2f91;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        display: block;
    }
`
