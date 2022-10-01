import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
  MAIN,
  SERVICES,
  SIGN_UP,
  SIGN_IN,
  SOCIAL
} from './NavbarConstants';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import capitalizeName,{capitalizeLine, trimLine, asPath} from '../../utils';

class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      is_navbar_transparent:false
    }
  }

  /*
  setNavbarTransparent = () => {
    (window.scrollY >= 80) ?
      this.setState({is_navbar_transparent: false}) :
      this.setState({is_navbar_transparent: true}) 
  }

  //Does not work on class
  useEffect(() => {
    window.addEventListener('scroll', setNavbarTransparent);
  },[])
  */

  //Apply style over clicked Link
  setActiveLink = (e) => {
    const active = "active";

    //get all <a/> from <ul id="nav_menu"/>
    const links = document.getElementById("nav_menu").getElementsByTagName("a");

    //remove "active" from all <a/>. Each <a/> is inside an <li/>
    Array.from(links).forEach(li => {
      li.classList.remove(active);
    })

    //add "active" to clicked <a/>
    e.target.classList.add(active);
  } 
  

  render(){

    //const {is_navbar_transparent} = this.state;
    const {toggle} = this.props;

    return (
      <>
      {/* Hamb. menu icon's color */}
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav is_navbar_transparent={false}>
            {/* Logo Icon */}
          <NavIcon to={MAIN}>
            <img src={require('../../images/white_rabbit_64.svg')} 
              alt='logo' 
            />
          </NavIcon>
  
          <NavbarContainer>
            <NavLogo to="/"><span></span></NavLogo>
  
            {/* Icon to display the NavMenu options */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          
            <NavMenu id="nav_menu">
              <NavItem>
                {/* Apply chosen option marked */}
                <NavLinks 
                  id={`nav_${MAIN}`}
                  to={MAIN}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  onClick={e => this.setActiveLink(e)}
                >{capitalizeName(MAIN)}</NavLinks>
              </NavItem>
              <NavItem>
                {/* Apply chosen option marked */}
                <NavLinks 
                  id={`nav_${SERVICES}`}
                  to={SERVICES}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  onClick={e => this.setActiveLink(e)}
                >{capitalizeName(SERVICES)}</NavLinks>
              </NavItem>
              {/*
              <NavItem>
                <NavLinks to={ABOUT}>{capitalizeLine(ABOUT)}</NavLinks>
              </NavItem>
              */}
              <NavItem>
                {/* Apply chosen option marked */}
                <NavLinks 
                  id={`nav_${SIGN_UP}`}
                  to={trimLine(SIGN_UP)}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}            
                  onClick={e => this.setActiveLink(e)}
                >{capitalizeLine(SIGN_UP)}</NavLinks>
              </NavItem>
              <NavItem>
                {/* Apply chosen option marked */}
                <NavLinks 
                  id={`nav_${SOCIAL}`}
                  to={SOCIAL}
                  smooth={true}
                  duration={500}
                  spy={false}
                  exact='true'
                  offset={-80}                
                  onClick={e => this.setActiveLink(e)}
                >{capitalizeName(SOCIAL)}</NavLinks>
              </NavItem>
            </NavMenu>
  
            <NavBtn>
              <NavBtnLink to={asPath(trimLine(SIGN_IN))}>{capitalizeLine(SIGN_IN)}</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      </>
    );
  }
}

export default Navbar;
