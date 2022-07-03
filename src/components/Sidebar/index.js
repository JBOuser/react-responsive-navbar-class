import React from 'react';
import { ABOUT, MAIN, SIGNIN, SIGNUP } from '../../constants/MenuOptions';
import { capitalizeLine } from '../../utils';
import {
    SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink,
    SidebarBtnWrap, SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onclick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="main">
                    {capitalizeLine(MAIN)}
                </SidebarLink>
                <SidebarLink to="about">
                    {capitalizeLine(ABOUT)}
                </SidebarLink>
                <SidebarLink to="signup">
                    {capitalizeLine(SIGNUP)}
                </SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/signin">
                    {capitalizeLine(SIGNIN)}
                </SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;