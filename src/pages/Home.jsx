import React from 'react'
import { FaBars } from 'react-icons/fa'

import { styled } from 'styled-components'
import HeadersLogo from '../../public/images/cta-logo-one.png'
import FooterImage from '../../public/images/cta-logo-two.png'
import logo from '../../public/images/logo.svg'
import HomeImage from '../../public/images/home-icon.svg'
import SearchImage from '../../public/images/search-icon.svg'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <Container>
      {/* <nav>
        <ul>
          <li>
            <img src={HomeImage} alt="" />
          Home
          </li>
          <li>SEARCH</li>
          <li>WATCHLIST</li>
          <li>ORIGINALS</li>
          <li>MOVIES</li>
          <li>SERIES</li>
        </ul>
      </nav> */}
      <PrimaryNav>
        <img src={logo} width={'100px'} style={{ position: 'relative', marginLeft: "20px" }} alt="" />
        <div>
        <Hamburger />
          <Menu>
          {/* <img src={HomeImage} alt="" /> */}
            <MenuLink to="/home" >
            Home
            </MenuLink>
            {/* <img src={SearchImage} alt="" /> */}
            <MenuLink to="/about" >
            WATCHLIST
            </MenuLink>
            <MenuLink to="/products" >
            WATCHLIST
            </MenuLink>
            <MenuLink to="/blog" >
            ORIGINALS
              </MenuLink>
              <MenuLink to="/blog" >
              MOVIES
              </MenuLink>
              <MenuLink to="/blog" >
              SERIES
            </MenuLink>
        </Menu>
        </div>
      </PrimaryNav>
      <Content>
        <CTA>
          <img src={HeadersLogo} alt="" />
          <SignUpBtn>
            <h1>GET ALL THERE</h1>
          </SignUpBtn>
          <ConTentText>
            <p>
              Get perimer Access to Raya And the lastest Dragon for additional fee with Disney+ subscription.As of 03/06/2023 , the price of Disney+ and The Disney bundle will increase by $1
            </p>
          </ConTentText>
          <img src={FooterImage} width={'550px'} style={{  display: 'inline-block',verticalAlign:'bottom'}} alt="" />
        </CTA>
        <BgImage/>
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow:hidden;
  display:flex;
  text-align:center;
  flex-direction:column;
  height:100vh;

  nav ul{
    text-decoration:none;
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
  }

  nav ul li {
    list-style-type:none;
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
  }
  
`;

const Content = styled.div`
  width:100%;
  display : flex;
  justify-content:center;
  align-items:center;
  position:relative;
  // flex-direction:column;
  padding:10px;
  min-height:100vh;
  text-align:center;
  box-sizing:border-box;
  height:100%;
`;


const BgImage = styled.div`
  width:100%;
  height:100%;
  background-repeat:no-repeat;
  top:0;
  left:0;
  right:0;
  z-index:-1;
  background-position:cover;
  position:absolute;
  background-image:url('/images/login-background.jpg')
`;

const CTA = styled.div`
  // background-color:green;
  width:80%;
  height:50%;
  padding:10px;
`;

const SignUpBtn = styled.div`
  margin-top:10px;
  padding:10px;
  background-color:#0369E8;
  border-radius:10px
`;

const ConTentText = styled.div`
  font-size:20px;
  font-family:Arial, Helvetica, sans-serif;
`;


const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: inline-flex;
  // background: #8bc34a;
  justify-content: space-between;
  align-items:center;
  padding:1rem calc((100vw - 1000px) / 2);
  
`;
const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`;
const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;