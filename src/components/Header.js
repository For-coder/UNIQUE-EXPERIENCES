import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import logo from "../images/logo4.png"
import { FaBars } from "react-icons/fa"
import style from "./styles/heading.css"
import { menuData } from "../data/MenuData.js"
import { Button } from "./Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/page-2/">
        <img src={logo} alt="logo" style={style} />
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, i) => (
          <NavLink to={item.link} key={i}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button main="true" round="true" to="/page-2/">
          BOOK NOW!
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right; 24px;

@media screen and (max-width: 768px) {
  display: none;
  
}
`
