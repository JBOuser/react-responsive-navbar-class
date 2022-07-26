import React, { Component } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { ABOUT_US, ALL_RIGHTS_RESERVED, CONTACT_US, CURRENT_YEAR, FACEBOOK, INSTAGRAM, YOUTUBE } from '../../constants/GeneralConstants';
import capitalizeName,{ capitalizeLine, trimLine } from '../../utils';
import { MAIN, SERVICES, SIGN_UP, SOCIAL } from '../Navbar/NavbarConstants';
import { 
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterSectionElements';

export class Footer extends Component {
  render() {
    return (
      <FooterContainer id={SOCIAL}>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>{capitalizeLine(ABOUT_US)}</FooterLinkTitle>
                    <FooterLink to={MAIN}>{capitalizeName(MAIN)}</FooterLink>
                    <FooterLink to={SERVICES}>{capitalizeName(SERVICES)}</FooterLink>
                    <FooterLink to={trimLine(SIGN_UP)}>{capitalizeLine(SIGN_UP)}</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>{capitalizeLine(CONTACT_US)}</FooterLinkTitle>
                    <FooterLink to={MAIN}>{capitalizeName(MAIN)}</FooterLink>
                    <FooterLink to={SERVICES}>{capitalizeName(SERVICES)}</FooterLink>
                    <FooterLink to={trimLine(SIGN_UP)}>{capitalizeLine(SIGN_UP)}</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to={MAIN}>
                <img src={require('../../images/whire_rabbit_ears_64.png')} 
                    alt='logo' 
                />
                </SocialLogo>
                <WebsiteRights>&#169; {CURRENT_YEAR} &nbsp; {capitalizeName(ALL_RIGHTS_RESERVED)}</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' 
                        aria-label={FACEBOOK}>
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' 
                        aria-label={INSTAGRAM}>
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' 
                        aria-label={YOUTUBE}>
                        <FaYoutube/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    )
  }
}

export default Footer;