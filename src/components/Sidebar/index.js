import React from 'react';
import { Component } from 'react';
import { MAIN, SERVICES, SIGN_UP, SIGN_IN, SOCIAL } from '../Navbar/NavbarConstants';
import capitalizeName, { asPath, capitalizeLine, trimLine } from '../../utils';
import {
    SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink,
    SidebarBtnWrap, SidebarRoute
} from './SidebarElements';

class Sidebar extends Component {

    render(){
        const {is_open, toggle} = this.props;
        return (
            <SidebarContainer is_open={is_open} onClick={toggle}>
                <Icon onclick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to={MAIN} onClick={toggle}>
                            {capitalizeName(MAIN)}
                        </SidebarLink>
                        <SidebarLink to={SERVICES} onClick={toggle}>
                            {capitalizeName(SERVICES)}
                        </SidebarLink>
                        <SidebarLink to={trimLine(SIGN_UP)} onClick={toggle}>
                            {capitalizeName(SIGN_UP)}
                        </SidebarLink>
                        <SidebarLink to={SOCIAL} onClick={toggle}>
                            {capitalizeName(SOCIAL)}
                        </SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to={asPath(trimLine(SIGN_IN))}>
                            {capitalizeLine(SIGN_IN)}
                        </SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        )
    }
}

export default Sidebar;